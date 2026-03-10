import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
    return await updateSession(request)
}

export const config = {
    matcher: [
        /*
         * Match only the routes that require authentication logic:
         * - /dashboard (protected)
         * - /login (auth redirect)
         * - /signup (auth redirect)
         */
        '/dashboard/:path*',
        '/login',
        '/signup',
    ],
}
