import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home";
import GlobalStyle, { light as lightTheme } from "./global-style";
import React from "react";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <React.Fragment>
        <GlobalStyle />
        <RouterProvider router={router} />
      </React.Fragment>
    </ThemeProvider>
  );
}

const router = createBrowserRouter([
  { path: "/", index: true, element: <Home /> },
]);
