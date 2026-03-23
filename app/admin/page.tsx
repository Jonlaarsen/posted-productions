import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CreateForm from "@/components/admin/CreateForm";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminPage() {
  const cookieStore = cookies();
  const isLoggedin = (await cookieStore).get("isLoggedin")?.value === "true";

  if (!isLoggedin) {
    redirect("/");
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <CreateForm />
      <LogoutButton />
    </div>
  );
}
