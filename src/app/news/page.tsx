import Breadcrumb from '@/components/common/Breadcrumb';

export default function NewsPage() {
  const breadcrumb = [
    { href: '/', label: '홈' },
    { href: '/news', label: '시정소식' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-2">
      <Breadcrumb items={breadcrumb} />
      <h1 className="text-3xl font-bold">시정 소식 메이ㄴ</h1>
    </div>
  );
}
