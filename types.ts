export interface Photo {
  id: number;
  src: string;
  title: string;
  rotation: string; // e.g., 'rotate-3', '-rotate-6'
  customClass?: string;
}

export interface NavItem {
  label: string;
  href: string;
}