import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Landing from "./landing/pages/Landing";
// import Load from "./loads/components/Load";
// import Loads from "./loads/pages/Loads";
// import NewLoad from "./loads/pages/NewLoad";
// import UpdateLoad from "./loads/pages/UpdateLoad";
// import UserLoads from "./loads/pages/UserLoads";
// import Auth from "./users/pages/Auth";
// import User from "./users/pages/User";
import { AuthContext } from "./shared/context/auth.context";
import { useAuth } from "./shared/hooks/auth-hook";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";

const NewLoad = React.lazy(() => import("./loads/pages/NewLoad"));
const UpdateLoad = React.lazy(() => import("./loads/pages/UpdateLoad"));
const UserLoads = React.lazy(() => import("./loads/pages/UserLoads"));
const User = React.lazy(() => import("./users/pages/User"));
const Load = React.lazy(() => import("./loads/components/Load"));
const Loads = React.lazy(() => import("./loads/pages/Loads"));
const Auth = React.lazy(() => import("./users/pages/Auth"));

const App = () => {
  const auth = useAuth();
  const { token, login, logout, userId, companyName, role } = useAuth();

  let routes;
  if (token) {
    routes = (
      <React.Fragment>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/:userId/loads" element={<UserLoads />} />
        <Route exact path="/loads/new" element={<NewLoad />} />
        <Route exact path="/loads" element={<Loads />} />
        <Route exact path="/loads/:loadId/edit" element={<UpdateLoad />} />
        <Route exact path="/loads/:loadId" element={<Load />} />
        <Route exact path="/users/:userId" element={<User />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </React.Fragment>
    );
    // if no tokens
  } else {
    routes = (
      <React.Fragment>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        role: role,
        companyName: companyName,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense fallback={<div className="center"><LoadingSpinner /></div>}>
            <Routes>{routes}</Routes>
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
