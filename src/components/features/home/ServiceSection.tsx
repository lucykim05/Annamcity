// src/components/features/home/ServiceSection.tsx
'use client';

const services = [
  { id: 1, title: '민원', desc: '민원 신청 및 처리', icon: '📄' },
  { id: 2, title: '참여', desc: '시민 참여 프로그램', icon: '🙋' },
  { id: 3, title: '정보', desc: '정보 공개/자료실', icon: '📊' },
  { id: 4, title: '복지', desc: '복지 서비스 안내', icon: '❤️' },
  { id: 5, title: '생활문화', desc: '문화·체육·관광 정보', icon: '🎭' },
];

export default function ServiceSection() {
  return (
    <div className="text-gray-900">
      <h2 className="text-2xl font-bold text-center mb-8">주요 서비스</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
