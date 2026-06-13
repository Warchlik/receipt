import { SeparatorWithText } from "@/components/separator-with-text";
import ThemeButton from "@/components/theme/ThemeButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Link, Pause } from "lucide-react";
import RegisterForm from "./_components/RegisterForm";

function CustomTabs() {

}

// export default function RegisterPage() {
//
//   return (
//     <section className="flex min-h-screen items-center justify-center">
//       <Card className="receipt-card sm:w-sm">
//         <CardHeader className="pt-4">
//           <CardTitle className="flex flex-row justify-between">
//             <div className="flex flex-row items-center">
//               <Pause />
//               Paragon
//             </div>
//             <ThemeButton />
//           </CardTitle>
//           <CardDescription className="mx-auto">
//             NR 0001 · {new Date().toLocaleDateString()} · EKRAN LOGOWANIA
//           </CardDescription>
//         </CardHeader>
//         <CardContent className=" flex flex-col gap-5">
//           <SeparatorWithText variant="dashed">
//             Dane Logowania
//           </SeparatorWithText>
//
//           <div></div>
//
//           <SeparatorWithText variant="dashed" />
//
//           <FieldGroup>
//             <Field>
//               <FieldLabel htmlFor="email">E-mail</FieldLabel>
//               <Input
//                 placeholder="Enter email..."
//                 id="email"
//                 name="email"
//                 type="text"
//               />
//             </Field>
//             <Field>
//               <FieldLabel htmlFor="password">Password</FieldLabel>
//               <Input
//                 placeholder="Enter password..."
//                 id="password"
//                 name="password"
//                 type="password"
//               />
//             </Field>
//             <div className="flex flex-row justify-between items-center">
//               <div className="flex flex-row gap-2">
//                 <Checkbox />
//                 Remember Me
//               </div>
//
//               <Button variant="link" className="flex flex-row items-center">
//                 <Link />
//                 Nie pamiętam hasła
//               </Button>
//             </div>
//           </FieldGroup>
//
//           <Separator className="bg-black" />
//
//           <Button className="flex flex-row items-center p-5 text-base">
//             Zaloguj
//             <ArrowRight />
//           </Button>
//
//           <div className="flex justify-center items-center">
//             <span>
//               Nie masz konta ?
//             </span>
//             <Button variant="link">
//               Załóż je
//             </Button>
//           </div>
//
//           <Separator />
//
//           <div className="flex flex-col gap-1">
//             <div className="pg-barcode h-16 w-full" />
//
//             <span className="mx-auto text-muted-foreground">
//               PRG 0001 1306 2026
//             </span>
//
//             <span className="mx-auto text-muted-foreground">
//               DZIĘKUJEMY ZA WSPÓLNE LICZENIE
//             </span>
//
//             <span className="mx-auto text-muted-foreground">
//               wkrótce · płatność BLIK prosto z aplikacji
//             </span>
//           </div>
//         </CardContent>
//       </Card>
//     </section>
//   )
// }


export default function RegisterPage() {
  return <RegisterForm />
}
