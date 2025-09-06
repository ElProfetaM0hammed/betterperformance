import {
  BookOpenTextIcon,
  HelpCircleIcon,
  HomeIcon,
  InfoIcon,
  LucideIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

export interface Routes {
  label: string;
  href: string;
  icon: LucideIcon;
  isProtected?: boolean | false;
  isBottomNav?: boolean | false;
}

export const routes: Routes[] = [
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
    isBottomNav: false,
    isProtected: false,
  },
  {
    label: "Docs",
    href: "/documentation",
    icon: BookOpenTextIcon,
    isBottomNav: false,
    isProtected: false,
  },
  {
    label: "About",
    href: "/about",
    icon: HelpCircleIcon,
    isBottomNav: false,
    isProtected: false,
  },
  {
    label: "settings",
    href: "/settings",
    icon: SettingsIcon,
    isProtected: true,
    isBottomNav: true,
  },
  {
    label: "profile",
    href: "/profile",
    icon: UsersIcon,
    isBottomNav: true,
    isProtected: true,
  },
];
