'use client';

import { useState } from 'react';

const services = [
  {
    id: 1,
    title: '민원',
    icon: '💻',
    children: ['시의상징', '기본현황', '도시정비기본계획'],
  },
  {
    id: 2,
    title: '참여',
    icon: '📱',
    children: ['공공시각매체', '공공와이파이', '개방화장실'],
  },
  {
    id: 3,
    title: '정보',
    icon: '🔍',
    children: [
      '공시주택가격열람',
      '자전거정비소',
      '모범음식점',
      '성남시생활지도',
    ],
  },
  {
    id: 4,
    title: '복지',
    icon: '❤️',
    children: ['시민안전보험', '성남시민순찰대'],
  },
  {
    id: 5,
    title: '생활문화',
    icon: '☕',
    children: ['문화체육관광', '도서관', '체육시설'],
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
                className="px-4 py-3 text-center bg-white rounded-lg shadow hover:bg-gray-100 cursor-pointer"
              >
                {child}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
