'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const services = [
  {
    id: 1,
    title: '민원',
    icon: '💻',
    children: [
      { name: '민원 접수', path: '/civil/apply' },
      { name: '청원 제안', path: '/civil/petitions' },
    ],
  },
  {
    id: 2,
    title: '참여',
    icon: '📱',
    children: [
      { name: '머시기 일정', path: '/participation/schedule' },
      { name: '머시기 굿즈', path: '/participation/goods' },
    ],
  },
  {
    id: 3,
    title: '정보',
    icon: '🔍',
    children: [
      { name: '시장', path: '/organization/mayor' },
      { name: '부시장', path: '/organization/vice-mayor' },
      { name: '경기지방검찰청', path: '/organization/prosecutor' },
      { name: '도견이네', path: '/organization/doggy' },
      { name: '안남유기견보호소', path: '/organization/us' },
    ],
  },
  {
    id: 4,
    title: '소식',
    icon: '✉️',
    children: [
      { name: '공지사항', path: '/news/notices' },
      { name: '보도자료', path: '/news/press' },
      { name: '포토, 영상', path: './news/photo' },
    ],
  },
  {
    id: 5,
    title: '아수라',
    icon: '🎥',
    children: [
      { name: '촬영지', path: '/fields/culture' },
      { name: '뭐하지', path: '/fields/um' },
      { name: '볼 수 있는 플랫폼?', path: '/asura/platforms' },
    ],
  },
];

export default function ServiceSection() {
  const [active, setActive] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="text-gray-900">
      <h2 className="text-2xl font-bold text-center mb-8">주요 서비스</h2>

      {/* 상위 카테고리 버튼 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {services.map((s) => (
          <div
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`flex items-center justify-center gap-2 px-6 py-4 rounded-lg cursor-pointer transition 
              ${
                active === s.id
                  ? 'border-2 border-gray-300 text-gray-500 bg-white'
                  : 'bg-white shadow hover:bg-gray-100'
              }
            `}
          >
            <span className="text-xl">{s.icon}</span>
            <h3 className="text-md font-semibold whitespace-nowrap">
              {s.title}
            </h3>
          </div>
        ))}
      </div>

      {/* 하위 버튼 */}
      {active && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {services
            .find((s) => s.id === active)
            ?.children.map((child, idx) => (
              <div
                key={idx}
                onClick={() => router.push(child.path)} // ✅ 클릭 시 이동
                className="px-4 py-3 text-center bg-white text-sm rounded-lg shadow hover:bg-gray-100 cursor-pointer"
              >
                {child.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
