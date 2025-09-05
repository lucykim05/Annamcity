'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';

const menuItems = [
  { href: '/about', label: '안남소개' },
  { href: '/news', label: '시정소식' },
  { href: '/civil', label: '전자민원' },
  { href: '/participation', label: '시민참여' },
  { href: '/organization', label: '행정정보' },
  { href: '/fields', label: '분야별정보' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* 로고 */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Annam.jpeg"
            alt="안남시 로고"
            width={160}
            height={60}
            priority
          />
        </Link>

        {/* PC 메뉴 */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-900 hover:text-gray-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 우측 버튼 */}
        <div className="hidden md:flex items-center space-x-6">
          <SearchBar />
          <Link
            href="/login"
            className="px-4 py-2 text-sm border border-gray-300 text-gray-900 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            로그인
          </Link>
        </div>

        {/* 햄버거 (모바일) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1"
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-900 hover:text-gray-500"
              >
                {item.label}
              </Link>
            ))}

            <SearchBar />

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm border text-gray-900 border-gray-300 rounded-md text-center hover:bg-gray-100"
            >
              로그인
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
