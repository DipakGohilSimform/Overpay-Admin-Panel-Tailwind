import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import OTP from "./pages/OTP";
import ForgotPass from "./pages/ForgotPass";
import Reason from "./pages/Reason";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/otp",
    element: <OTP />,
  },
  {
    path: "/forgot-pass",
    element: <ForgotPass />,
  },
  {
    path: "/reason",
    element: <Reason />,
  },
]);
