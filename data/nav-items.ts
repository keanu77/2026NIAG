import {
  Ambulance,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Home,
  MapPinned,
  // Phone,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { href: "/", label: "首頁", shortLabel: "首頁", icon: Home },
  { href: "/overview", label: "賽事總覽", shortLabel: "總覽", icon: MapPinned },
  { href: "/roles", label: "角色分工", shortLabel: "分工", icon: Users },
  {
    href: "/preparation",
    label: "賽前準備",
    shortLabel: "準備",
    icon: ClipboardCheck,
  },
  { href: "/records", label: "紀錄與回報", shortLabel: "紀錄", icon: FileText },
  {
    href: "/transfer",
    label: "後送與應變",
    shortLabel: "應變",
    icon: Ambulance,
  },
  { href: "/sports", label: "單項競賽規則", shortLabel: "規則", icon: Shield },
  {
    href: "/emergency",
    label: "場邊急症處理",
    shortLabel: "急症",
    icon: HeartPulse,
  },
  {
    href: "/assessment",
    label: "評估工具",
    shortLabel: "工具",
    icon: Stethoscope,
  },
  // { href: "/contacts", label: "重要窗口", shortLabel: "窗口", icon: Phone },
];
