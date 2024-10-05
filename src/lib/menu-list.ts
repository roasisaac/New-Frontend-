import {
  Tag,
  Users,
  Settings,
  Workflow,
  
  LayoutGrid,
  LucideIcon,
  Inbox
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/feed",
          label: "Feed",
          active: pathname.includes("/feed"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "/inbox",
          label: "Inbox",
          active: pathname.includes("/posts"),
          icon: Inbox,
          submenus: [
           
          ]
        },
        {
          href: "/workplace",
          label: "Workplace",
          active: pathname.includes("/workplace"),
          icon: Workflow
        },
      
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "",
          label: "Settings",
          active: pathname.includes("/posts"),
          icon: Settings,
          submenus: [
            {
              href: "/settings",
              label: "Profile"
            },
            {
              href: "/settings/account",
              label: "Account"
            },
            {
              href: "/settings/appearance",
              label: "Apperance"
            },
            {
              href: "/settings/notifications",
              label: "Notifications"
            },
            {
              href: "/settings/display",
              label: "Display"
            }
          
          ]
        },
        
      ]
    }
  ];
}
