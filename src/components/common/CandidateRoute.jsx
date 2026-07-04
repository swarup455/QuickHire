import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const CandidateRoute = ({ children }) => {
    const { user } = useUser();

    const role = user?.unsafeMetadata?.role;

    if (!role) {
        return <Navigate to="/onboarding" replace />;
    }

    if (role !== "candidate") {
        return <Navigate to="/dashboard/post-job" replace />;
    }

    return children;
};

export default CandidateRoute;