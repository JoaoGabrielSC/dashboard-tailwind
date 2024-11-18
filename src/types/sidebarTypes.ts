export interface badgeProps {
  text: string
  color: string
  darkColor: string
}

export interface LinkItemProps {
    href: string;
    icon: any;
    text: string;
    badge?: badgeProps
}
