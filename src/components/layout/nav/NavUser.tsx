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
import { ChevronsUpDownIcon, BadgeCheckIcon, BellIcon, LogOutIcon } from "lucide-react"
import { useEffect, useState } from "react"

export function NavUser() {
  const { isMobile } = useSidebar()
  const [userData, setUserData] = useState<any>(null)

  console.log(userData)

  useEffect(() => {
    getUser().then(setUserData)
  }, [])

  console.log(userData)

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8">
                {/* <AvatarImage src={user.avatar} alt={userData?.user?.email ?? ""} /> */}
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{userData?.profile?.first_name}</span>
                <span className="truncate text-xs">{userData?.user?.email}</span>
              </div>
              <ChevronsUpDownIcon className="ml-auto size-4" />
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
                <Avatar className="h-8 w-8">
                  {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                  <AvatarFallback className="">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{userData?.profile?.first_name}</span>
                  <span className="truncate text-xs">{userData?.user?.email}</span>
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
              {/*   <CreditCardIcon */}
              {/*   /> */}
              {/*   Billing */}
              {/* </DropdownMenuItem> */}
              <DropdownMenuItem>
                <BellIcon />
                Notifications
              </DropdownMenuItem>
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
