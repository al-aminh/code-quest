"use client";
import { UserRole } from "@prisma/client";
import { ModeToggle } from "../../../components/ui/ModeToggle";
import Link from "next/link";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Navbar = ({ userRole }) => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 hover:bg-white/15 hover:dark:bg-black/15">
        <div className="flex justify-between items-center px-6 py-4">
          <Link href="/">
            <span>CodeQuest</span>
          </Link>

          <div className="space-x-4">
            <Link href="/" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400">Problems</Link>
            <Link href="/" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400">About</Link>
            <Link href="/" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400">Profile</Link>
          </div>

          <div className="flex space-x-4">
            <ModeToggle />
            {isSignedIn ? (
              userRole &&
              userRole === UserRole.ADMIN && (
                <Button>
                  <Link href="" className="px-4 py-3">
                    Create Problem
                  </Link>
                </Button>
              )
            ) : (
              <div>
                <SignInButton>
                  <Button>Sign In</Button>
                </SignInButton>
                <SignUpButton>
                  <Button>Sign Up</Button>
                </SignUpButton>
              </div>
            )}

            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
