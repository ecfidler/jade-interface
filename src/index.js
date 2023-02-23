import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import { createHashRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Layout from "./Layout/Layout";
import ConnectionPage from "./Connection/ConnectionPage";
import MainPage from "./Main/MainPage";
import ErrorElement from "./Error/ErrorElement";

const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: "/",
                element: <ConnectionPage />,
            },
            {
                path: "/main/:connectionURL",
                element: <MainPage />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
