import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { RiAppsLine } from "react-icons/ri";
import { RxTable } from "react-icons/rx";
import { TbDashboard, TbLayoutKanban, TbTableOptions } from "react-icons/tb";
import { TfiGallery } from "react-icons/tfi";

export interface MenuGroup {
  name: string;
  icon?: JSX.Element;
  href?: string;
  items?: MenuGroup[];
}

export const SidebarItems: MenuGroup[] = [
  {
    name: "Dashboard",
    icon: <TbDashboard />,
    href: "/dashboard",
  },
  {
    name: "Tables",
    icon: <RxTable />,
    href: "/dashboard/tables",
    items: [],
  },
  {
    icon: <TbTableOptions />,
    name: "Builder",
    href: "/dashboard/builder",
    items: [
      {
        name: "Table Builder",
        icon: <TbTableOptions />,
        href: "/dashboard/builder/table",
      },
    ],
  },

  {
    name: "Apps",
    icon: <RiAppsLine />,
    href: "/dashboard/apps",
    items: [
      {
        icon: <HiOutlineCalendarDays />,
        name: "Calendar",
        href: "/dashboard/apps/calendar",
      },
      {
        icon: <TbLayoutKanban />,
        name: "Kanban",
        href: "/dashboard/apps/kanban",
      },
      {
        icon: <HiOutlineMail />,
        name: "Emails",
        href: "/dashboard/apps/emails",
      },
      {
        icon: <TfiGallery />,
        name: "File Manager",
        href: "/dashboard/apps/filemanager",
      },
    ],
  },
];
