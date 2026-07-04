import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const RecruiterRoute = ({ children }) => {
    const { user } = useUser();

    const role = user?.unsafeMetadata?.role;

    if (!role) {
        return <Navigate to="/onboarding" replace />;
    }

    if (role !== "recruiter") {
        return <Navigate to="/dashboard/jobs" replace />;
    }

    return children;
};

export default RecruiterRoute;