import { NextRequest, NextResponse } from 'next/server'
import { createI18nMiddleware } from 'next-international/middleware';
import { cookies } from 'next/headers'
import { AnyAction, Middleware, MiddlewareAPI, isRejected, isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'sonner';


function isPayloadErrorMessage(payload: unknown): payload is {
  data: {
    error: string
  }
  status: number
} {
  return (
    typeof payload === 'object' &&
    payload !== null &&
    'data' in payload &&
    typeof (payload as any).data?.error === 'string'
  )
}

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action: AnyAction) => {

  if (isRejected(action)) {
    if (action.error.name === 'CustomError') {
      toast.message('any', {
        description: action.error.message
    })
    }
  }

  if (isRejectedWithValue(action)) {
    if (isPayloadErrorMessage(action.payload)) {
      toast.warning(action.payload.data.error)
    }
  }

  return next(action)
}
const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
});
const protectedRoutes = ["dashboard"];

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  if (!token && request.nextUrl.pathname.includes('dashboard')) {
      const absoluteURL = new URL("/en/login", request.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }
  return I18nMiddleware(request);
}



export const config = {
  matcher: [
    '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)',
  ],
};