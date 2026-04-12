import { getUserRole } from "../../modules/auth/actions";
import Navbar from "../../modules/home/components/Navbar";


export default async function RootLayout({children}){
    const userRole = await getUserRole()
    return (
        <main className="flex flex-col min-h-screen max-h-screen">
            <Navbar userRole={userRole}/>
            <div className="flex-1 flex flex-col px-4 pb-4">
                <div className="absolute inset-0 h-full w-full -z-10 bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] dark:bg-[size:16px_16px] bg-[radial-gradient(#dadde2_1px,transparent_1px)] bg-[size:16px_16px]"/>
                {children}
            </div>
        </main>
    )
}