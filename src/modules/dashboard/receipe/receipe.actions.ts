"use server"

import { db } from "@/database/drizzle-client";
import { receipts, user_receipts } from "@/database/schemas/receipts";
import { auth } from "@/lib/auth";
import { NewReceipt } from "@/types/types";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function saveReceipe(_: unknown, formData: FormData) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/auth/login")
  }

  const payload: NewReceipt = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    currency: formData.get("currency") as string,
    people_count: Number(formData.get("people_count")),
    purchase_at: new Date(formData.get("purchase_at") as string ?? ""),
    amount: Number(formData.get("amount"))
  }

  let receiptId: string

  try {
    receiptId = await db.transaction(async (trans) => {
      const [receipt] = await trans
        .insert(receipts)
        .values(payload)
        .returning({ id: receipts.id })

      await trans.insert(user_receipts).values({
        user_id: session.user.id,
        receipt_id: receipt.id,
        role: "creator"
      })

      return receipt.id
    })

  } catch (e) {
    console.log(e)
    return {
      success: false
    }
  }

  return {
    success: true,
  }
}
