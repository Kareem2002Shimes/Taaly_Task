import { Pages, Role, Routes } from '@/_constants/enums';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const userRole = cookies().get('role')?.value;

  const pathname = req.nextUrl.pathname;
  const authPages = [
    `/${Pages.LOGIN}`,
    `/${Pages.SIGNUP}`,
    `/${Pages.FORGOT_PASSWORD}`,
  ];
  const isAuth = cookies().get('access_token')?.value;

  const protectedRoutes = [`/${Routes.PROFILE}`, `/${Routes.ADMIN}`];

  const isAuthPages = authPages.some((route) => pathname.startsWith(route));
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isAuthPages && isAuth) {
    if (userRole === Role.ADMIN) {
      return NextResponse.redirect(new URL(`/${Routes.ADMIN}`, req.url));
    }
    return NextResponse.redirect(new URL(`/${Routes.PROFILE}`, req.url));
  }

  if (userRole === Role.USER && pathname.startsWith(protectedRoutes[1])) {
    return NextResponse.redirect(new URL(`/${Routes.PROFILE}`, req.url));
  }

  if (!isAuth && isProtectedRoute) {
    return NextResponse.redirect(new URL(`/${Pages.LOGIN}`, req.url));
  }
}
export const config = {
  matcher: [
    `/${Routes.PROFILE}/:path*`,
    `/${Pages.LOGIN}`,
    `/${Pages.SIGNUP}`,
    `/${Pages.FORGOT_PASSWORD}`,
    `/${Routes.ADMIN}/:path*`,
  ],
};
