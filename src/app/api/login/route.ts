import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (email === 'test@test.com' && password === '1234') {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { success: false, message: '잘못된 이메일 또는 비밀번호' },
    { status: 401 }
  );
}
