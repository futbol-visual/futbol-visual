import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@/utils/supabase/server';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
    const body = await req.text();
    const signature = headers().get('Stripe-Signature') as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (error: any) {
        return NextResponse.json({ error: `Webhook Error: ${error.message}` }, { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    if (event.type === 'checkout.session.completed') {
        const supabase = createClient();

        // Retrieve metadata from the session
        const userId = session.metadata?.userId;
        const courseSlug = session.metadata?.courseSlug;
        const amount = session.amount_total ? session.amount_total / 100 : 0;

        if (userId && courseSlug) {
            const { error } = await supabase
                .from('purchases')
                .insert([
                    {
                        user_id: userId,
                        product_slug: courseSlug,
                        amount: amount,
                        status: 'completed',
                        created_at: new Date().toISOString(),
                    }
                ]);

            if (error) {
                console.error('Error recording purchase:', error);
                return NextResponse.json({ error: 'Error recording purchase' }, { status: 500 });
            }
        }
    }

    return NextResponse.json({ received: true });
}
