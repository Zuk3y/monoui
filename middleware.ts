import { NextRequest, NextResponse } from 'next/server'
import { get } from '@vercel/edge-config'

export const config = {
    // Match all routes except maintenance page and static files
    matcher: [
        '/((?!maintenance|_next/static|_next/image|favicon.ico).*)',
    ],
}

export async function middleware(req: NextRequest) {
    // Check Edge Config to see if maintenance mode is enabled
    const isInMaintenanceMode = await get('isInMaintenanceMode')

    // Skip if already on maintenance page
    if (req.nextUrl.pathname === '/maintenance') {
        return NextResponse.next()
    }

    // If in maintenance mode, redirect to maintenance page
    if (isInMaintenanceMode) {
        req.nextUrl.pathname = '/maintenance'
        return NextResponse.rewrite(req.nextUrl)
    }
}