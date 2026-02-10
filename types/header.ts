export interface NavbarProps {
  items: NavItemProps[];
}

export interface NavItemProps {
  label: string;
  url: string;
  className?: string;
}
