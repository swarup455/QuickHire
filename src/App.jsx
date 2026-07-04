import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { HashLoader } from "react-spinners"

import LandingPage from "./pages/common/LandingPage";
import Layout from "./components/common/Layout";
import JobListing from "./pages/dashboard/JobListing";
import Onboarding from "./pages/common/Onboarding";
import JobPage from "./pages/dashboard/JobPage";
import PostJobs from "./pages/dashboard/PostJobs";
import SavedJobs from "./pages/dashboard/SavedJobs";
import MyJobs from "./pages/dashboard/MyJobs";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ProtectedRoute from "./components/common/ProtectRoute";
import CandidateRoute from "./components/common/CandidateRoute";
import RecruiterRoute from "./components/common/RecruiterRoute";
import HomeRedirect from "./components/common/HomeRedirect";
import DashboardRedirect from "./components/common/DashboardRedirect";
import { useLocation } from "react-router-dom";

function App() {
  const { isLoaded, isSignedIn } = useUser();
  const location = useLocation();
  const hideLayout = location.pathname === "/onboarding";

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center min-h-screen z-20 bg-zinc-900">
        <HashLoader
          color="#ffffff"
          size={45}
        />
      </div>
    );
  }

  return (
    <div className="gradient-background">
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={isSignedIn ? (<HomeRedirect />) : (<LandingPage />)} />
        <Route path="/onboarding" element={<ProtectedRoute> <Onboarding /> </ProtectedRoute>} />

        <Route path="/dashboard" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          {/* candidate routes */}
          <Route index element={<DashboardRedirect />} />
          <Route path="jobs" element={<CandidateRoute><JobListing /></CandidateRoute>} />
          <Route path="saved-jobs" element={<CandidateRoute><SavedJobs /></CandidateRoute>} />
          <Route path="job/:id" element={<CandidateRoute><JobPage /></CandidateRoute>} />

          {/* recruiter routes */}
          <Route path="post-job" element={<RecruiterRoute><PostJobs /></RecruiterRoute>} />
          <Route path="my-jobs" element={<RecruiterRoute><MyJobs /></RecruiterRoute>} />
        </Route>
      </Routes>
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;