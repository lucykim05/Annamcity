import Sidebar from '@/components/common/Sidebar';

const aboutMenu = [
  { href: '/about/annam', label: '안남시 개요' },
  { href: '/about/history', label: '연혁' },
  { href: '/about/vision', label: '비전·공약' },
  { href: '/about/symbol', label: '상징물' },
];

export default function AboutLayout({
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
