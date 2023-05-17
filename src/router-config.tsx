import { Login, Register } from "@features/authentication/components";
import { AuthenticationLayout } from "./layouts/authentication-layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AuthenticationLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
