"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import logoutAction from "@/modules/auth/auth.actions"
import getUser from "@/modules/dashboard/dashboard.actions"
import { ChevronsUpDownIcon, BadgeCheckIcon, BellIcon, LogOutIcon, Barcode } from "lucide-react"
import { useEffect, useState } from "react"

export function NavUser() {
  const { isMobile } = useSidebar()
  const [userData, setUserData] = useState<any>(null)

  console.log(userData)

  useEffect(() => {
    getUser().then(setUserData)
  }, [])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{userData?.profile?.first_name} {userData?.profile?.last_name}</span>
                <span className="truncate text-xs text-muted-foreground">{userData?.user?.email}</span>
              </div>
              <Barcode />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{userData?.profile?.first_name} {userData?.profile?.last_name}</span>
                  <span className="truncate text-xs text-muted-foreground">{userData?.user?.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheckIcon />
                Profile
              </DropdownMenuItem>
              {/* <DropdownMenuItem> */}
              {/*   <BellIcon /> */}
              {/*   Notifications */}
              {/* </DropdownMenuItem> */}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={logoutAction}
            >
              <LogOutIcon />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
