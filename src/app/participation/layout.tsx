import Sidebar from '@/components/common/Sidebar';
import Link from 'next/link';

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
