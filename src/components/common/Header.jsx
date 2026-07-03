import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/clerk-react";


const Header = () => {
    return (
        <div className="w-full sticky top-0 bg-zinc-900 z-10 border-b px-4 border-zinc-100 dark:border-zinc-800">
            <nav className="max-w-6xl mx-auto flex items-center justify-between py-3">
                <Link className="flex items-center gap-4" to="/">
                    <img src="/logo.svg" className="h-8" alt="QuickHire" />
                    <h1 className="font-bold text-2xl">QuickHire</h1>
                </Link>

                <SignedOut>
                    <SignInButton mode="redirect">
                        <Button size="lg" className="h-11 px-3">Get Started</Button>
                    </SignInButton>
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </nav>
        </div>
    );
};

export default Header;