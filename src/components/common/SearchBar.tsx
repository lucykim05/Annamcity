'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react'; // 아이콘 (lucide-react 설치 필요)

export default function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    router.push(`/search?query=${encodeURIComponent(keyword)}`);
    setKeyword('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border-b border-gray-400 max-w-md w-full text-gray-600"
    >
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="flex-grow px-3 py-2 outline-none text-sm"
      />
      <button
        type="submit"
        className="p-2 text-gray-500 hover:text-gray-700"
        aria-label="검색"
      >
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
}
