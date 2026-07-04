import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const HomeRedirect = () => {
    const { user } = useUser();

    const role = user?.unsafeMetadata?.role;

    if (!role) {
        return <Navigate to="/onboarding" replace />;
    }

    return (
        <Navigate
            to={role === "candidate" ? "/dashboard/jobs" : "/dashboard/post-job"}
            replace
        />
    );
};

export default HomeRedirect;