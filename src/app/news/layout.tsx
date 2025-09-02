import Sidebar from '@/components/common/Sidebar';

const aboutMenu = [
  { href: '/about/notices', label: '공지 사항' },
  { href: '/about/press', label: '보도자료' },
  { href: '/about/media', label: '포토, 영상' },
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
