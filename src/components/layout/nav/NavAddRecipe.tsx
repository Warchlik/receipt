"use client"

import RecipeDialog from "@/components/dialogs/RecipeDialog"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import AddReceipeForm from "@/modules/dashboard/receipe/_components/ReceipeAddForm"
import { Plus } from "lucide-react"
import { useState } from "react"

export function NavAddRecipe() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <SidebarGroup className="mt-auto">
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <RecipeDialog
              open={open}
              setOpen={setOpen}
              form={<AddReceipeForm />}
            />

            <SidebarMenuButton
              size="lg"
              variant="outline"
              className="flex flex-row items-center text-base border border-black dark:border-white"
              onClick={() => setOpen(true)}
            >
              <Plus />
              Add recipe
            </SidebarMenuButton>

          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup >
  )
}
