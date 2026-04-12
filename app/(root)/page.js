
import {onBoardUser} from "../../modules/auth/actions"
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
 await onBoardUser()
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      
    </div>
  );
}
