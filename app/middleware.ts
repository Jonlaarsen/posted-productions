import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedin = request.cookies.get('isLoggedin')?.value === 'true';

  if (!isLoggedin) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Apply this middleware only to the `/admin` route
export const config = {
  matcher: '/admin',
};
