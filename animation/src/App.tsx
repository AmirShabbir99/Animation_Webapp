import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import AdminPanel from "./AdminPanel";
import ClientPanel from "./ClientPanel";
import Home from "./Home";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const location = useLocation();
  const { loading, isAuthorized, user } = useSelector((state: any) => state.user);

  console.log("isAuthorized", isAuthorized);
  console.log("role :", user?.user?.role);
  console.log("user :", user?.user);
  console.log("user 2:", user);
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        Checking authentication...
      </div>
    );
  }

  return (
    <Routes>

      <Route
        path="/login"
        element={!isAuthorized ? <LoginPage /> : <Navigate to="/" />}
      />

      <Route
        path="/signup"
        element={!isAuthorized ? <SignupPage /> : <Navigate to="/" />}
      />

      <Route
        path="/"
        element={
          !isAuthorized ? (
            <Navigate to="/login" />
          ) : user?.role === "SuperAdmin" ? (
            <Navigate to="/admin" />
          ) : user?.role === "User" ? (
            <Navigate to="/user" />
          ) : (
            <Home />
          )
        }
      />


      <Route
        path="/admin"
        element={
          isAuthorized && user?.role === "SuperAdmin"
            ? <AdminPanel />
            : <Navigate to="/" />
        }
      />

      <Route
        path="/user"
        element={
          isAuthorized && user?.role === "User"
            ? <ClientPanel />
            : <Navigate to="/" />
        }
      />11

      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
};

export default App;