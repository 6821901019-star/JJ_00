import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { count } from "console";

export default async function Dashboard(){

    const user = await getSession();

    if (!user){
        redirect("/login");
    }

    return(
        <div>

            <h2> Dashbosrd </h2>
            <p>Welcom: {user.name as string}</p>
            <p>Role: {user.role as string}</p>
            <p>{user.school as string}</p>
        </div>
    );
}