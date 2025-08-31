'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* 로고 */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Annam.jpeg"
            alt="안남시 로고"
            width={200}
            height={80}
            priority // 첫 화면에 보이므로 최적화
          />
        </Link>

        {/* 메뉴 */}
        <nav className="flex space-x-8 text-sm font-medium">
          <Link href="/news" className="text-gray-900 hover:text-gray-500">
            시정소식
          </Link>
          <Link href="/civil" className="text-gray-900 hover:text-gray-500">
            전자민원
          </Link>
          <Link
            href="/participation"
            className="text-gray-900 hover:text-gray-500"
          >
            시민참여
          </Link>
          <Link
            href="/gov/organization"
            className="text-gray-900 hover:text-gray-500"
          >
            행정정보
          </Link>
          <Link href="/culture" className="text-gray-900 hover:text-gray-500">
            문화·관광
          </Link>
          <Link href="/economy" className="text-gray-900 hover:text-gray-500">
            경제·투자
          </Link>
          <Link
            href="/help/contact"
            className="text-gray-900 hover:text-gray-500"
          >
            고객센터
          </Link>
        </nav>

        {/* 우측 버튼 */}
        <div className="flex items-center space-x-6">
          <button className="px-6 py-2 text-sm bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 cursor-pointer">
            검색
          </button>

          <button className="px-4 py-2 text-sm border border-gray-300 text-gray-900 rounded-md hover:bg-gray-100 cursor-pointer">
            로그인
          </button>
        </div>
      </div>
    </header>
  );
}
