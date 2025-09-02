import Breadcrumb from '@/components/common/Breadcrumb';

export default function CivilPage() {
  const breadcrumb = [
    { href: '/', label: '홈' },
    { href: '/fields', label: '분야별 정보' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-2">
      <Breadcrumb items={breadcrumb} />
      <h1 className="text-3xl font-bold">촬영지, 도시개발계획?</h1>
    </div>
  );
}
