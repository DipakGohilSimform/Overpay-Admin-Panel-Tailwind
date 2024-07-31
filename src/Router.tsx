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
import Messages from "./pages/Messages";
import AccountDetails from "./pages/AccountDetails";
import AccountSetting from "./pages/AccountSetting";
import GetHelp from "./pages/GetHelp";

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
      {
        path: "/messages",
        index: true,
        element: <Messages />,
      },
      {
        path: "/account-details",
        index: true,
        element: <AccountDetails />,
      },
      {
        path: "/account-setting",
        index: true,
        element: <AccountSetting />,
      },
      {
        path: "/get-help",
        index: true,
        element: <GetHelp />,
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
