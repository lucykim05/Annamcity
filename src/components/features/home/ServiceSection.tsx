'use client';

import { useState } from 'react';

const services = [
  {
    id: 1,
    title: '민원',
    icon: '💻',
    children: ['민원 접수', '청원 제안'],
  },
  {
    id: 2,
    title: '참여',
    icon: '📱',
    children: ['대관 일정', '머시기 일정', '머시기 굿즈'],
  },
  {
    id: 3,
    title: '정보',
    icon: '🔍',
    children: [
      '시장',
      '부시장',
      '경기지방검찰청',
      '도견이네',
      '한도견 관리 협회',
    ],
  },
  {
    id: 4,
    title: '소식',
    icon: '✉️',
    children: ['공지사항', '보도자료'],
  },
  {
    id: 5,
    title: '아수라',
    icon: '🎥',
    children: ['촬영지', '뭐하지', '볼 수 있는 플랫폼?'],
  },
];

export default function ServiceSection() {
  const [active, setActive] = useState<number | null>(null);

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

      {/* 하위 버튼 (선택된 경우에만 표시) */}
      {active && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {services
            .find((s) => s.id === active)
            ?.children.map((child, idx) => (
              <div
                key={idx}
                className="px-4 py-3 text-center bg-white text-sm rounded-lg shadow hover:bg-gray-100 cursor-pointer"
              >
                {child}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
