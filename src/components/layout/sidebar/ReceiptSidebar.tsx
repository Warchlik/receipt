"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, LifeBuoyIcon, SendIcon, FrameIcon, Pause } from "lucide-react"
import Link from "next/link"
import ThemeButton from "@/components/theme/ThemeButton"
import { NavRecipes } from "../nav/NavRecipes"
import { NavAddRecipe } from "../nav/NavAddRecipe"
import { NavUser } from "../nav/NavUser"

const data = {
  projects: [
    {
      name: "Receipts",
      url: "#",
      icon: (
        <FrameIcon
        />
      ),
    },
  ],
}

export function ReceiptSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row">
              <Link href="#" className="flex flex-row items-center gap-2">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Pause className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Paragon</span>
                </div>
              </Link>
            </div>
            <ThemeButton />
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavRecipes />
        <NavAddRecipe />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
