export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface NavbarProps {
  /** @deprecated Use LogoIcon instead */
  logo?: string;
  items?: NavItem[];
}