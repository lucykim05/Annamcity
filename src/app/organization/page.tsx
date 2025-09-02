import Breadcrumb from '@/components/common/Breadcrumb';

export default function OrganizationPage() {
  const breadcrumb = [
    { href: '/', label: '홈' },
    { href: '/organization', label: '행정정보' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-2">
      <Breadcrumb items={breadcrumb} />
      <h1 className="text-3xl font-bold">조직도오</h1>
    </div>
  );
}
