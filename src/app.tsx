import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./global-style";
import Home from "./pages/home";

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

const router = createBrowserRouter([
  { path: "/", index: true, element: <Home /> },
]);
