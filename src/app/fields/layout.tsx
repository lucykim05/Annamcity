import Sidebar from '@/components/common/Sidebar';

const aboutMenu = [
  { href: '/fields/culture', label: '문화·관광' },
  { href: '/fields/economy', label: '경제·투자' },
];

export default function FieldsLayout({
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
