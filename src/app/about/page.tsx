import Breadcrumb from '@/components/common/Breadcrumb';

export default function AboutPage() {
  const breadcrumb = [
    { href: '/', label: '홈' },
    { href: '/about', label: '안남소개' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-2">
      <Breadcrumb items={breadcrumb} />
      <h1 className="text-3xl font-bold">안남시 소개 메인</h1>
    </div>
  );
}
