export interface ServiceType {
  id: number;
  title: string;
  time: string;
  description: string;
}

export interface NavLinkType {
  href: string;
  label: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}