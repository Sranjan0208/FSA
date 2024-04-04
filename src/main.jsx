import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserInfo from "./pages/UserInfo.jsx";
import Work from "./pages/Work.jsx";
import EmailVerification from "./pages/EmailVerification.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user-info",
    element: <UserInfo />,
  },
  {
    path: "/work-info",
    element: <Work />,
  },
  {
    path: "/email-verify",
    element: <EmailVerification />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
