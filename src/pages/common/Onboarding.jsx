import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseBusiness, UserRound } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const Onboarding = () => {
  const { user } = useUser();
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectedRole = async (role) => {
    try {
      setIsLoading(true);

      await user.update({
        unsafeMetadata: { role },
      });

      await user.reload();

      navigate(
        role === "candidate"
          ? "/dashboard/jobs"
          : "/dashboard/post-job",
        { replace: true }
      );
    } catch (error) {
      toast.error("Failed to update your role.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigate(
        user?.unsafeMetadata?.role === "candidate"
          ? "/dashboard/jobs"
          : "/dashboard/post-job",
        { replace: true }
      );
    }
  }, [user])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 sm:px-6">
      <Card className="w-full max-w-3xl bg-zinc-900 border-zinc-800">
        <CardContent className="p-5 sm:p-8 md:p-10">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Welcome{user?.firstName ? `, ${user.firstName}` : ""} 👋
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
              Tell us who you are to personalize your QuickHire experience.
            </p>
          </div>

          <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Candidate */}
            <button
              type="button"
              onClick={() => setSelectedRole("candidate")}
              className={`group rounded-xl sm:rounded-2xl border p-5 sm:p-8 text-left transition-all duration-300 hover:-translate-y-1 ${selectedRole === "candidate"
                ? "border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20"
                : "border-slate-700 bg-slate-900 hover:border-blue-500/50"
                }`}
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-blue-500/15 flex items-center justify-center">
                <UserRound className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400" />
              </div>

              <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-white">
                I'm a Candidate
              </h2>

              <p className="mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-400">
                Discover jobs, save opportunities, track applications and grow your
                career.
              </p>
            </button>

            {/* Recruiter */}
            <button
              type="button"
              onClick={() => setSelectedRole("recruiter")}
              className={`group rounded-xl sm:rounded-2xl border p-5 sm:p-8 text-left transition-all duration-300 hover:-translate-y-1 ${selectedRole === "recruiter"
                ? "border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/20"
                : "border-slate-700 bg-slate-900 hover:border-emerald-500/50"
                }`}
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                <BriefcaseBusiness className="w-5 h-5 sm:w-7 sm:h-7 text-emerald-400" />
              </div>

              <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-white">
                I'm an Employer
              </h2>

              <p className="mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-400">
                Post jobs, manage applicants and find the right talent for your
                company.
              </p>
            </button>
          </div>

          <Button
            disabled={!selectedRole || isLoading}
            onClick={() => handleSelectedRole(selectedRole)}
            className="mt-6 sm:mt-8 w-full h-11 sm:h-12 rounded-xl text-sm sm:text-base"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait...
              </>
            ) : (
              "Continue"
            )}
          </Button>

          <p className="mt-4 text-center text-[11px] sm:text-xs text-slate-500">
            You can change your role later from your account settings.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Onboarding;