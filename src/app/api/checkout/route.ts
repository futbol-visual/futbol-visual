import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@/utils/supabase/server';

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
    try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        // For now, allow guests to purchase (we'll capture email in Stripe)
        // But ideally they should be logged in or we create an account for them.
        // Let's assume the user is logged in for the flow we verified in step 1.
        // If not, we can redirect to login, OR (better for conversion) let them buy as guest 
        // and create account later. But let's stick to "Login -> Buy" for simplicity and security first.

        if (!user) {
            return NextResponse.json(
                { error: 'Debes iniciar sesión para comprar.' },
                { status: 401 }
            );
        }

        const { priceId, slug, title } = await req.json();

        const origin = req.headers.get('origin') || 'http://localhost:3000';

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: title,
                            metadata: {
                                slug: slug,
                            }
                        },
                        unit_amount: priceId * 100, // Amount in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/dashboard?success=true`,
            cancel_url: `${origin}/cursos/${slug}?canceled=true`,
            customer_email: user.email,
            metadata: {
                userId: user.id,
                courseSlug: slug,
            }
        });

        return NextResponse.json({ url: session.url }, { headers: corsHeaders });
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: 500, headers: corsHeaders });
    }
}
