import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match } from 'path-to-regexp';
import { getSession } from './service/auth/auth';

const matchersForAuth = ['/:id'];
const matchersForSignIn = ['/sign-up', '/sign-in'];

export async function middleware(request: NextRequest) {
  // 인증이 필요한 페이지 접근 제어!
  if (isMatch(request.nextUrl.pathname, matchersForAuth)) {
    return (await getSession()) // 세션 정보 확인
      ? NextResponse.next()
      : NextResponse.redirect(new URL('/sign-in', request.url));
  }
  // 인증 후 회원가입 및 로그인 접근 제어!
  if (isMatch(request.nextUrl.pathname, matchersForSignIn)) {
    return (await getSession())
      ? NextResponse.redirect(new URL('/', request.url))
      : NextResponse.next();
  }
  return NextResponse.next();
}

// 경로 일치 확인!
function isMatch(pathname: string, urls: string[]) {
  return urls.some((url) => !!match(url)(pathname));
}
