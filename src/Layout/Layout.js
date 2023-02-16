import { Outlet } from "react-router-dom";

import * as React from "react";

import Box from "@mui/material/Box";
import Navbar from "../Navbar/Navbar";

import ConnectionContext from "../api/connectionContext";
import LogContext from "../api/logContext";

export default function Layout() {
    const [apiURL, setApiURL] = React.useState("");

    const [logList, setLogList] = React.useState([]);

    const initialLog = [
        {
            message: "logged!",
            urgency: "error",
            timestamp: Date.now(),
        },
    ]; // save or get this from localstorage!

    const add = (item) => {
        setLogList(logList.concat(item));
    };

    const clear = () => {
        setLogList([]);
    };

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
                <LogContext.Provider
                    value={{ log: initialLog, add: add, clear: clear }}
                >
                    <ConnectionContext.Provider
                        value={{ url: apiURL, updateUrl: setApiURL }}
                    >
                        <Navbar />
                        <Outlet />
                    </ConnectionContext.Provider>
                </LogContext.Provider>
            </Box>
        </>
    );
}
