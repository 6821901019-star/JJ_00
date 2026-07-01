import { getSession } from "@/lib/session"
import { redirect } from "next/navigation";

export default async function profile(){
    const user = await getSession();
    if (!user) {
        redirect("/login");
    }

    return (
        <div>

            <h2> Profile </h2>
            <p>Name: {user.name as string}</p>
            <p>Role: {user.role as string}</p>
            <p>Email: {user.email as string}</p>
            <p>School: {user.school as string}</p>
        </div>
    )
}