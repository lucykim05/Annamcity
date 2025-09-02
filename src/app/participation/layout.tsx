import Sidebar from '@/components/common/Sidebar';

const aboutMenu = [
  { href: '/participation/굿즈....?', label: '굿즈...?' },
  { href: '/participation/일정...?', label: '일정...?' },
];

export default function ParticipationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto flex px-6 py-8 space-x-8">
      <Sidebar menuItems={aboutMenu} />
      <div className="flex-1">{children}</div>
    </div>
  );
}
