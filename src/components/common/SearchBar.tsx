'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

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
    <form onSubmit={handleSubmit} className="relative w-40">
      <input
        type="text"
        placeholder="검색"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="w-full px-3 py-1 pr-8 border-b border-gray-400 outline-none text-sm text-gray-600"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        aria-label="검색"
      >
        <Search className="w-4 h-4" />
      </button>
    </form>
  );
}
