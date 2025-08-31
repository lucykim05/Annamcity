'use client';

const news = [
  { id: 1, title: '안남시 환경대상 2년 연속 수상', date: '2025-08-20' },
  { id: 2, title: '안남시 가을 문화축제 개최', date: '2025-09-01' },
  { id: 3, title: '스마트시티 정책 발표', date: '2025-09-10' },
];

export default function NewsSection() {
  return (
    <div className="text-gray-900">
      <h2 className="text-2xl font-bold text-center mb-8">시정 소식</h2>
      <ul className="space-y-4">
        {news.map((n) => (
          <li
            key={n.id}
            className="p-4 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer"
          >
            <p className="text-gray-700 font-medium">{n.title}</p>
            <span className="text-sm text-gray-400">{n.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
