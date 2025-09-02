import Breadcrumb from '@/components/common/Breadcrumb';

export default function CivilPage() {
  const breadcrumb = [
    { href: '/', label: '홈' },
    { href: '/civil', label: '전자민원' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-2">
      <Breadcrumb items={breadcrumb} />
      <h1 className="text-3xl font-bold">전자민원 메인</h1>
    </div>
  );
}
