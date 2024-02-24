"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { Code, CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, Music, MusicIcon, Settings, VideoIcon } from "lucide-react";


import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
// import { routes } from "./tools";
import { navLinks } from "@/constants";





const montserrat = Montserrat ({ weight: '600', subsets: ['latin'] });
// routes
// const routes = [
//   {
//     label: 'Dashboard',
//     icon: LayoutDashboard,
//     href: '/dashboard',
//     color: "text-sky-500"
//   },
//   {
//     label: 'Conversation',
//     icon: MessageSquare,
//     href: '/conversation',
//     color: "text-violet-500"
//   },
//   {
//     label: 'Image Generation',
//     icon: ImageIcon,
//     href: '/image',
//     color: "text-pink-700"
//   },
//   {
//     label: 'Video Generation',
//     icon: VideoIcon,
//     href: '/video',
//     color: "text-orange-700"
//   },
//   {
//     label: 'Music Generation',
//     icon: MusicIcon,
//     href: '/music',
//     color: "text-emerald-500"
//   },
//   {
//     label: 'Code Generation',
//     icon: Code,
//     href: '/code',
//     color: "text-green-700"
//   },
//   {
//     label: 'Setting',
//     icon: Settings,
//     href: '/settings',
//     // color: "text-green-700"
//   },
// ];

const Sidebar = () => {
  
const pathname = usePathname()
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white border-none">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-10">
          <div className="relative  mr-4">
            <Image width={100} height={100} alt="ogo" src="/logo.png" />
          </div>
          {/* <div className={cn("text-lg font-bold", montserrat.className)}>
            NextGenius
          </div> */}
        </Link>
        <div className="space-y-1">
          {navLinks.map((route) => (
            <Link
              key={route.label} 
              href={route.route}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.route ? "text-white bg-white/10" : "text-zinc-100"
              )}
            >
              <div className="flex items-center flex-1 ">
                {/* <route.icon className={cn("h-5 w-5 mr-3", route.color)} /> */}
                <div className="px-2">

               <Image width={20} height={20} alt={route.label} src={route.icon} />
                </div>
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar