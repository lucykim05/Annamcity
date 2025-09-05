import Sidebar from '@/components/common/Sidebar';
import Link from 'next/link';

const aboutMenu = [
  { href: '/organization/시장', label: '시장??' },
  { href: '/news/press', label: '부시장' },
  { href: '/news/media', label: '경기지방검찰청' },
  { href: '/organization/한도경', label: '한도경 어디소속임 ㅅㅂ' },
  {
    href: '/organization/한도견',
    label: '우리 뭐라고 할거임 한도견 관리 협회도 아니고',
  },
];

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex md:hidden space-x-4 overflow-x-auto pb-2 border-b">
        {aboutMenu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm text-gray-700 hover:text-blue-600"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex space-x-8 mt-6">
        <Sidebar menuItems={aboutMenu} />
        <div className="flex-1">{children}</div>
      </div>

      <div className="md:hidden mt-4">{children}</div>
    </div>
  );
}
