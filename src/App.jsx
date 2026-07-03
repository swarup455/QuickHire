import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

import LandingPage from "./pages/common/LandingPage";
import Layout from "./components/common/Layout";
import JobListing from "./pages/dashboard/JobListing";
import Onboarding from "./pages/dashboard/Onboarding";
import JobPage from "./pages/dashboard/JobPage";
import PostJobs from "./pages/dashboard/PostJobs";
import SavedJobs from "./pages/dashboard/SavedJobs";
import MyJobs from "./pages/dashboard/MyJobs";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ProtectedRoute from "./components/common/ProtectRoute";

function App() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return null;

  return (
    <div className="gradient-background">
      <Header />
      <Routes>
        <Route
          path="/"
          element={isSignedIn ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <LandingPage />
          )}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="jobs" replace />} />
          <Route path="jobs" element={<JobListing />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="job/:id" element={<JobPage />} />
          <Route path="post-job" element={<PostJobs />} />
          <Route path="saved-jobs" element={<SavedJobs />} />
          <Route path="my-jobs" element={<MyJobs />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;