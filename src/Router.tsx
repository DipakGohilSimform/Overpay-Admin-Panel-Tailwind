import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import OTP from "./pages/OTP";
import ForgotPass from "./pages/ForgotPass";
import Reason from "./pages/Reason";
import Transactions from "./pages/Transactions";
import Recipients from "./pages/Recipients";
import MyWallet from "./pages/MyWallet";
import Invoices from "./pages/Invoices";
import CreateInvoice from "./pages/CreateInvoice";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/transactions",
        index: true,
        element: <Transactions />,
      },
      {
        path: "/recipients",
        index: true,
        element: <Recipients />,
      },
      {
        path: "/my-wallet",
        index: true,
        element: <MyWallet />,
      },
      {
        path: "/invoices",
        index: true,
        element: <Invoices />,
      },
      {
        path: "/invoices/create-invoice",
        index: true,
        element: <CreateInvoice />,
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
