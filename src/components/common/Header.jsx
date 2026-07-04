import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
    useUser
} from "@clerk/clerk-react";
import { Bookmark, PenBox } from "lucide-react";

const Header = () => {
    const { user } = useUser();

    return (
        <div className="w-full sticky top-0 bg-zinc-900 z-10 border-b px-4 border-zinc-100 dark:border-zinc-800">
            <nav className="max-w-6xl mx-auto flex items-center justify-between py-3">
                <Link className="flex items-center gap-4" to="/">
                    <img src="/logo.svg" className="h-8" alt="QuickHire" />
                    <h1 className="font-bold text-2xl">QuickHire</h1>
                </Link>

                <div className="flex items-center gap-4">
                    <SignedOut>
                        <SignInButton mode="redirect">
                            <Button size="lg" className="h-11 px-3">Get Started</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        {user?.unsafeMetadata?.role === "recruiter" && (
                            <Link to="/dashboard/post-job">
                                <Button variant="destructive">
                                    <PenBox size={20} className="mr-2" />
                                    Post a Job
                                </Button>
                            </Link>
                        )}
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10",
                                    userButtonTrigger:
                                        "rounded-full border border-gray-200 hover:shadow-md transition-all",
                                },
                            }}
                        >
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label="Saved Jobs"
                                    labelIcon={<Bookmark className="h-4 w-4" />}
                                    href="/dashboard/saved-jobs"
                                />

                                <UserButton.Action label="manageAccount" />
                                <UserButton.Action label="signOut" />
                            </UserButton.MenuItems>
                        </UserButton>
                    </SignedIn>
                </div>
            </nav>
        </div>
    );
};

export default Header;