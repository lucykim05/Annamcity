import Breadcrumb from '@/components/common/Breadcrumb';

export default function ParticipationPage() {
  const breadcrumb = [
    { href: '/', label: '홈' },
    { href: '/participation', label: '시민참여' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-2">
      <Breadcrumb items={breadcrumb} />
      <h1 className="text-3xl font-bold">이벤트 진행 페이지 메인이 될듯?</h1>
    </div>
  );
}
