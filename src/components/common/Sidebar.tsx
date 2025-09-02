'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  href: string;
  label: string;
}

export default function Sidebar({ menuItems }: { menuItems: MenuItem[] }) {
  const pathname = usePathname();

  return (
    <aside className="w-56 border-r">
      <nav className="flex flex-col p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-2 rounded-md text-sm ${
              pathname === item.href
                ? 'bg-blue-600 text-white font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
