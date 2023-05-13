"use client";

import { IconButton } from "@/components/ui/IconButton";
import useOnClickOutside from "@/hooks/use-onClickOutside";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { HiOutlineBell } from "react-icons/hi";

const NotificationIcon = () => {
  const ref = useRef(null);
  const [opened, setOpened] = useState(false);

  useOnClickOutside(ref, () => setOpened(false));

  return (
    <div>
      <div className="relative inline-block">
        <IconButton onClick={() => setOpened(!opened)}>
          <HiOutlineBell />
        </IconButton>

        <div
          ref={ref}
          className={cn(
            "rounded-default fixed right-4 z-20 mt-2 w-64 origin-top-right overflow-hidden border border-border-light bg-primary-light shadow-xl dark:border-border-dark dark:bg-primary-dark sm:w-80 md:absolute md:right-0",
            {
              hidden: !opened,
            },
          )}
        >
          <div className="">
            {notificationsList.slice(0, 5).map((n, i) => (
              <a
                key={i}
                href="#"
                className="flex transform items-center border-b border-border-light px-4 py-3 hover:bg-secondary-light dark:border-border-dark dark:hover:bg-secondary-dark"
              >
                <img
                  className="mx-1 h-8 w-8 flex-shrink-0 rounded-full object-cover"
                  src={n.image}
                  alt="avatar"
                />
                <p className="mx-2 text-sm text-gray-600 dark:text-white">
                  <span className="font-bold">{n.title}</span>
                  <span className=""> {n.desc} </span>
                  <span className=" "> {n.time} </span>{" "}
                </p>
              </a>
            ))}
          </div>
          <a
            href="#"
            className="text-accent block bg-primary-light py-3 text-center font-bold hover:bg-secondary-light hover:underline dark:bg-primary-dark dark:hover:bg-secondary-dark"
          >
            See all notifications
          </a>
        </div>
      </div>
    </div>
  );
};
export default NotificationIcon;

const notificationsList = [
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    title: "Sara Salah",
    desc: "commented on the image",
    time: "2m",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    title: "John Doe",
    desc: "messaged: 'Thank you for your help'",
    time: "10m",
  },
  {
    image:
      "https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    title: "Reporter",
    desc: "report from previous month",
    time: "1hr",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80",
    title: "Abigail Bennett",
    desc: "started following you",
    time: "2hr",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    title: "John Doe",
    desc: "messaged: 'Thank you for your help'",
    time: "10m",
  },
];
