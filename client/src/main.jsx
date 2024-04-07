import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserInfo from "./pages/UserInfo.jsx";
import Work from "./pages/Work.jsx";
import EmailVerification from "./pages/EmailVerification.jsx";
import ErrorPage from "./components/error-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user-info",
    element: <UserInfo />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/work-info",
    element: <Work />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/email-verify",
    element: <EmailVerification />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
