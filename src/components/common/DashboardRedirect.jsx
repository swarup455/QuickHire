import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const DashboardRedirect = () => {
    const { user } = useUser();

    const role = user?.unsafeMetadata?.role;

    if (!role) {
        return <Navigate to="/onboarding" replace />;
    }

    return (
        <Navigate
            to={role === "candidate" ? "jobs" : "post-job"}
            replace
        />
    );
};

export default DashboardRedirect;