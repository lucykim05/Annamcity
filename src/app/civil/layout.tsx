import Sidebar from '@/components/common/Sidebar';

const aboutMenu = [
  { href: '/civil/apply', label: '민원 접수' },
  { href: '/civil/petitions', label: '청원 제안' },
];

export default function CivilLayout({
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
