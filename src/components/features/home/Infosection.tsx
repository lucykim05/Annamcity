'use client';

const infos = [
  { id: 1, title: '부서별 안내', icon: '🏢' },
  { id: 2, title: '재정 정보', icon: '💰' },
  { id: 3, title: '자치 법규', icon: '📜' },
  { id: 4, title: '시정 통계', icon: '📈' },
];

export default function InfoSection() {
  return (
    <div className="text-gray-900">
      <h2 className="text-2xl font-bold text-center mb-8">시정 정보</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {infos.map((i) => (
          <div
            key={i.id}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer"
          >
            <div className="text-4xl mb-4">{i.icon}</div>
            <h3 className="text-lg font-semibold">{i.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
