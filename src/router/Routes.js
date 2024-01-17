import { Navigate, Route, Routes as MyRoutes } from "react-router";
import { routes } from "./RoutePaths";
import RedirectAuth from "./RedirectAuth";
// import Page404 from "../pages/public/error/Page404";
import Layout from "../components/Layout/Layout";
// import Login from "../pages/public/auth/Login";
// import ForgotPassword from "../pages/public/auth/ForgotPassword";
import { useAuthContext } from "../ContextAPI/AuthContextAPI";
import Login from "../pages/login/Login";

const Routes = () => {
  const { currUserData } = useAuthContext();

  return (
    <MyRoutes>
      <Route
        path="/login"
        // element={currUserData ? <Navigate to="/" replace /> : <Login />}
        element={<Login />}
      />
      <Route
        path="/forgot-password"
        // element={ currUserData ? <Navigate to="/" replace /> : <ForgotPassword />}
      />
      <Route path="/" element={<Layout />}>
        <Route path="*" element={""} />

        {routes.map((r) =>
          r.subRouting ? (
            <Route
              key={r.path}
              path={r.path}
              element={
                <RedirectAuth role={r.role} notLazy={r?.notLazy}>
                  <r.element title={r.name || ""} />
                </RedirectAuth>
              }
            >
              {r.subRoute.map((e) => (
                <Route
                  path={e.path}
                  key={e.path}
                  element={
                    <RedirectAuth role={r.role} notLazy={e?.notLazy}>
                      <e.element title={e.name || ""} />
                    </RedirectAuth>
                  }
                />
              ))}
            </Route>
          ) : (
            <Route
              key={r.path}
              path={r.path}
              element={
                <RedirectAuth role={r.role} notLazy={r?.notLazy}>
                  <r.element title={r.name || ""} />
                </RedirectAuth>
              }
            />
          )
        )}
      </Route>
    </MyRoutes>
  );
};

export default Routes;
