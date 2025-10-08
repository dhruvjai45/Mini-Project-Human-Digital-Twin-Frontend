
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AlertCircle,
  BookText,
  Bot,
  CalendarPlus,
  Home,
  Settings,
  Smartphone,
  User,
} from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Home' },
  { href: '/dashboard/profile', icon: User, label: 'Profile' },
  { href: '/dashboard/appointments', icon: CalendarPlus, label: 'Appointments' },
  { href: '/dashboard/devices', icon: Smartphone, label: 'Devices' },
  { href: '/dashboard/history', icon: BookText, label: 'Medical History' },
  { href: '/dashboard/twin', icon: Bot, label: 'Digital Twin' },
  { href: '/dashboard/alerts', icon: AlertCircle, label: 'Alerts' },
  { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="grid items-start text-sm font-medium">
      <SidebarMenu>
        {navItems.map(({ href, icon: Icon, label }) => (
          <SidebarMenuItem key={label}>
            <SidebarMenuButton
              asChild
              isActive={pathname === href}
              tooltip={{ children: label }}
            >
              <Link href={href}>
                <Icon />
                <span>{label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </nav>
  );
}
