import { Outlet } from "react-router-dom";

import * as React from "react";

import Box from "@mui/material/Box";
import Navbar from "../Navbar/Navbar";

import ConnectionContext from "../api/connectionContext";
import LogContext from "../api/logContext";
import LoggerContext from "../api/loggerContext";

const initialLog = [
    {
        message: "initial",
        urgency: "error",
        timestamp: Date.now(),
    },
];

export default function Layout() {
    // save or get this from localstorage!

    const [apiURL, setApiURL] = React.useState(undefined);

    const [logList, setLogList] = React.useState(initialLog);

    const add = React.useCallback((item) => {
        setLogList((oldList) => [...oldList, item]);
    }, []);

    const clear = React.useCallback(() => {
        setLogList([]);
    }, []);

    const loggers = React.useMemo(() => ({ add, clear }), [add, clear]);

    return (
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
            <LogContext.Provider value={logList}>
                <LoggerContext.Provider value={loggers}>
                    <ConnectionContext.Provider
                        value={{ url: apiURL, updateUrl: setApiURL }}
                    >
                        <Navbar />
                        <Outlet />
                    </ConnectionContext.Provider>
                </LoggerContext.Provider>
            </LogContext.Provider>
        </Box>
    );
}
