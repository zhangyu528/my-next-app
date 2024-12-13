export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface NavbarProps {
  logo?: string;
  items?: NavItem[];
} 