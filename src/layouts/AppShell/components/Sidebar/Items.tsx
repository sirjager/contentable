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
  },
  {
    name: "Tables",
    icon: <RxTable />,
    items: [],
  },
  {
    icon: <TbTableOptions />,
    name: "Builder",
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
    items: [
      {
        icon: <HiOutlineCalendarDays />,
        name: "Calendar",
      },
      {
        icon: <TbLayoutKanban />,
        name: "Kanban",
      },
      {
        icon: <HiOutlineMail />,
        name: "Emails",
      },
      {
        icon: <TfiGallery />,
        name: "File Manager",
      },
    ],
  },
  {
    name: "Apps",
    icon: <RiAppsLine />,
    items: [
      {
        icon: <HiOutlineCalendarDays />,
        name: "Calendar",
      },
      {
        icon: <TbLayoutKanban />,
        name: "Kanban",
      },
      {
        icon: <HiOutlineMail />,
        name: "Emails",
      },
      {
        icon: <TfiGallery />,
        name: "File Manager",
      },
    ],
  },
  {
    name: "Apps",
    icon: <RiAppsLine />,
    items: [
      {
        icon: <HiOutlineCalendarDays />,
        name: "Calendar",
      },
      {
        icon: <TbLayoutKanban />,
        name: "Kanban",
      },
      {
        icon: <HiOutlineMail />,
        name: "Emails",
      },
      {
        icon: <TfiGallery />,
        name: "File Manager",
      },
    ],
  },
  {
    name: "Apps",
    icon: <RiAppsLine />,
    items: [
      {
        icon: <HiOutlineCalendarDays />,
        name: "Calendar",
      },
      {
        icon: <TbLayoutKanban />,
        name: "Kanban",
      },
      {
        icon: <HiOutlineMail />,
        name: "Emails",
      },
      {
        icon: <TfiGallery />,
        name: "File Manager",
      },
    ],
  },
  {
    name: "Apps",
    icon: <RiAppsLine />,
    items: [
      {
        icon: <HiOutlineCalendarDays />,
        name: "Calendar",
      },
      {
        icon: <TbLayoutKanban />,
        name: "Kanban",
      },
      {
        icon: <HiOutlineMail />,
        name: "Emails",
      },
      {
        icon: <TfiGallery />,
        name: "File Manager",
      },
    ],
  },
  {
    name: "Apps",
    icon: <RiAppsLine />,
    items: [
      {
        icon: <HiOutlineCalendarDays />,
        name: "Calendar",
      },
      {
        icon: <TbLayoutKanban />,
        name: "Kanban",
      },
      {
        icon: <HiOutlineMail />,
        name: "Emails",
      },
      {
        icon: <TfiGallery />,
        name: "File Manager",
      },
    ],
  },
  {
    name: "Apps",
    icon: <RiAppsLine />,
    items: [
      {
        icon: <HiOutlineCalendarDays />,
        name: "Calendar",
      },
      {
        icon: <TbLayoutKanban />,
        name: "Kanban",
      },
      {
        icon: <HiOutlineMail />,
        name: "Emails",
      },
      {
        icon: <TfiGallery />,
        name: "File Manager",
      },
    ],
  },
  {
    name: "Apps",
    icon: <RiAppsLine />,
    items: [
      {
        icon: <HiOutlineCalendarDays />,
        name: "Calendar",
      },
      {
        icon: <TbLayoutKanban />,
        name: "Kanban",
      },
      {
        icon: <HiOutlineMail />,
        name: "Emails",
      },
      {
        icon: <TfiGallery />,
        name: "File Manager",
      },
    ],
  },
  {
    name: "Apps",
    icon: <RiAppsLine />,
    items: [
      {
        icon: <HiOutlineCalendarDays />,
        name: "Calendar",
      },
      {
        icon: <TbLayoutKanban />,
        name: "Kanban",
      },
      {
        icon: <HiOutlineMail />,
        name: "Emails",
      },
      {
        icon: <TfiGallery />,
        name: "File Manager",
      },
    ],
  },
  {
    name: "Apps",
    icon: <RiAppsLine />,
    items: [
      {
        icon: <HiOutlineCalendarDays />,
        name: "Calendar",
      },
      {
        icon: <TbLayoutKanban />,
        name: "Kanban",
      },
      {
        icon: <HiOutlineMail />,
        name: "Emails",
      },
      {
        icon: <TfiGallery />,
        name: "File Manager",
      },
    ],
  },
  {
    name: "Apps",
    icon: <RiAppsLine />,
    items: [
      {
        icon: <HiOutlineCalendarDays />,
        name: "Calendar",
      },
      {
        icon: <TbLayoutKanban />,
        name: "Kanban",
      },
      {
        icon: <HiOutlineMail />,
        name: "Emails",
      },
      {
        icon: <TfiGallery />,
        name: "File Manager",
      },
    ],
  },
];
