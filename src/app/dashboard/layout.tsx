import DashboardProvider from "@/modules/dashboard/_components/DashboardProvider";
import { ReactNode } from "react";

export default function DashboardLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <DashboardProvider>
      {children}
    </DashboardProvider>
  )
}
