import { Link } from "react-router-dom";
import {
  FaBriefcase as BriefcaseBusiness,
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaXTwitter as Twitter,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="border-t border-zinc-800 bg-background">
            <div className="max-w-6xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                                <BriefcaseBusiness className="h-5 w-5" />
                            </div>

                            <span className="text-xl font-bold">JobPortal</span>
                        </Link>

                        <p className="mt-4 text-sm leading-6 text-zinc-400">
                            Connecting talented professionals with top companies. Find your
                            dream job or hire exceptional talent effortlessly.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <a
                                href="#"
                                className="rounded-lg border border-zinc-800 p-2 text-zinc-400 transition hover:border-indigo-500 hover:text-indigo-400"
                            >
                                <Github size={18} />
                            </a>

                            <a
                                href="#"
                                className="rounded-lg border border-zinc-800 p-2 text-zinc-400 transition hover:border-indigo-500 hover:text-indigo-400"
                            >
                                <Linkedin size={18} />
                            </a>

                            <a
                                href="#"
                                className="rounded-lg border border-zinc-800 p-2 text-zinc-400 transition hover:border-indigo-500 hover:text-indigo-400"
                            >
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Job Seekers */}
                    <div>
                        <h3 className="mb-4 font-semibold">Job Seekers</h3>

                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li>
                                <Link to="/jobs" className="hover:text-white transition">
                                    Browse Jobs
                                </Link>
                            </li>

                            <li>
                                <Link to="/companies" className="hover:text-white transition">
                                    Companies
                                </Link>
                            </li>

                            <li>
                                <Link to="/saved-jobs" className="hover:text-white transition">
                                    Saved Jobs
                                </Link>
                            </li>

                            <li>
                                <Link to="/profile" className="hover:text-white transition">
                                    My Profile
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Employers */}
                    <div>
                        <h3 className="mb-4 font-semibold">Employers</h3>

                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li>
                                <Link to="/post-job" className="hover:text-white transition">
                                    Post a Job
                                </Link>
                            </li>

                            <li>
                                <Link to="/dashboard" className="hover:text-white transition">
                                    Employer Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link to="/pricing" className="hover:text-white transition">
                                    Pricing
                                </Link>
                            </li>

                            <li>
                                <Link to="/support" className="hover:text-white transition">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-4 font-semibold">Company</h3>

                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li>
                                <Link to="/about" className="hover:text-white transition">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="hover:text-white transition">
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link to="/privacy" className="hover:text-white transition">
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link to="/terms" className="hover:text-white transition">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-sm text-zinc-500 md:flex-row">
                    <p>© {new Date().getFullYear()} JobPortal. All rights reserved.</p>

                    <p>Made with ❤️ for job seekers and employers.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;