import { Outlet } from "react-router-dom";

import * as React from "react";

import Box from "@mui/material/Box";
import Navbar from "../Navbar/Navbar";

import ConnectionContext from "../api/connectionContext";

export default function Layout() {
    const [apiURL, setApiURL] = React.useState("");

    return (
        <>
            <Box
                sx={{
                    width: "100vw",
                    height: "100vh",
                    overflow: "hidden",
                    background:
                        "linear-gradient(120deg, rgb(0, 168, 107) 50%, rgb(253, 237, 176) 100%)",
                    borderRadius: "5px",
                }}
            >
                <ConnectionContext.Provider
                    value={{ url: apiURL, updateUrl: setApiURL }}
                >
                    <Navbar />
                    <Outlet />
                </ConnectionContext.Provider>
            </Box>
        </>
    );
}
