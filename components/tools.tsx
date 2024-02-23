import { BookAIcon, Code, CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MessageSquareCode, Music, MusicIcon, Settings, VideoIcon } from "lucide-react";
export const routes = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
      color: "text-sky-500"
      
    },
    {
      
      label: 'PDF Explorer',

      // label: 'Conversation',
      icon: BookAIcon,
      // icon: MessageSquare,

      href: '/conversation',
      color: "text-violet-500",
      bgColor:"bg-violet-500/10",
    },
   
    {
      label: 'Setting',
      icon: Settings,
      href: '/settings',
      // color: "text-green-700"
    },
  ];

  export const tool = [
    
    {
      label: 'Conversation',
      icon: MessageSquare,
      href: '/conversation',
      color: "text-violet-500",
      bgColor:"bg-violet-500/10",
    },
    {
      label: 'Conversation Statefull',
      icon: MessageSquareCode,
      href: '/full_state_conversation',
      color: "text-emerald-500",
      bgColor:"bg-emerald-500/10",
    },
    {
      label: 'Code Generation',
      icon: Code,
      href: '/code',
      color: "text-green-700"
    },
        
    
  ];  



  