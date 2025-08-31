'use client';

const infos = [
  { id: 1, title: '부서별 안내', icon: '🏢' },
  { id: 2, title: '도시 개발 계획', icon: '💰' },
  { id: 3, title: '자치 법규', icon: '📜' },
  { id: 4, title: '시정 통계', icon: '📈' },
];

export default function InfoSection() {
  return (
    <div className="text-gray-900">
      <h2 className="text-2xl font-bold text-center mb-6">시정 정보</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {infos.map((i) => (
          <div
            key={i.id}
            className="flex flex-col items-center text-center cursor-pointer group"
          >
            {/* 원형 아이콘 영역 (작게) */}
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full 
                         bg-white shadow group-hover:shadow-md transition"
            >
              <span className="text-2xl">{i.icon}</span>
            </div>

            {/* 텍스트 (작게) */}
            <h3 className="mt-2 text-sm font-medium text-gray-800">
              {i.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
