"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next"
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaMedal,
  FaProjectDiagram,
} from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import logo from "@/public/images/Coding-Sharks-Logo.png";

const navItems = [
  { href: "/", label: "Home", icon: <FaHome className="text-lg" /> },
  {
    href: "/user/dashbord",label: "Dashboard",
    icon: <TbLayoutDashboardFilled className="text-lg" />,
  },
  {
    href: "/user/studantwork",
    label: "Profile",
    icon: <FaUser className="text-lg" />,
  },
  {
    href: "/dashboard/Dailyquestions",
    label: "Daily Questions",
    icon: <FaClipboardList className="text-lg" />,
  },
  {
    href: "/dashboard/CourseTimeline",
    label: "Course Timeline",
    icon: <FaTimeline className="text-lg" />,
  },
  {
    href: "/dashboard/LeagueBoard",
    label: "League Board",
    icon: <FaMedal className="text-lg" />,
  },
  {
    href: "/dashboard/Projects",
    label: "Projects",
    icon: <FaProjectDiagram className="text-lg" />,
  },
  {
    href: "/dashboard/StudentWorkUploadForm",
    label: "Upload StudentWork",
    icon: <FaProjectDiagram className="text-lg" />,
  },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="relative h-full">
      <aside className="fixed top-0 left-0 h-screen w-56 bg-white shadow-md border-r border-gray-200 flex flex-col z-50">
        {/* Logo */}
        <div className="flex justify-center items-center py-4 border-b-2 border-orange-400">
          <Image
            src={logo}
            alt="Coding Sharks Logo"
            className="h-10 w-auto opacity-90"
            priority
          />
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto py-2">
          <ul className="space-y-2 px-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href as Route}
                    
                    className={`flex items-center px-4 py-2 rounded-md transition-all duration-200 overflow-hidden ${
                      isActive
                        ? "bg-orange-50 text-orange-600 font-medium"
                        : "text-gray-500 hover:bg-gray-50 hover:text-orange-500"
                    }`}
                  >
                    <span className="flex-shrink-0 opacity-80">
                      {item.icon}
                    </span>
                    <span className="ml-3 text-sm truncate">
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
}  