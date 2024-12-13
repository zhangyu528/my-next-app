'use client';

import { navStyles, defaultNavItems } from './Navbar.styles';

interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: string;
  items?: NavItem[];
}

export default function Navbar({ 
  logo = "Cursor",
  items = defaultNavItems
}) {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.container}>
        <div className={navStyles.logo}>{logo}</div>
        <div className={navStyles.itemsWrapper}>
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={item.isButton ? navStyles.button : navStyles.link}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
} 