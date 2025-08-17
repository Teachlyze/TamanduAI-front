import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  //console.log('🚀 Middleware executando!', req.url);
 // console.log('Token:', token);
  return NextResponse.next();
}

// Roda para todas as rotas
export const config = {
  matcher: ['/p', '/p', '/p'],
};
