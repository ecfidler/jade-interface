import * as React from "react";

// import * as fs from "fs";

import { Box, CircularProgress } from "@mui/material";

import ModelView from "./ModelView";

import ConnectionContext from "../../api/connectionContext";
// import LoggerContext from "../../api/loggerContext";

import { buildURL } from "../../api/api";

export default function ModelTab({ fileName }) {
    const connection = React.useContext(ConnectionContext);
    // const logger = React.useContext(LoggerContext);

    const modelURL = React.useMemo(() => {
        return buildURL(connection.url, `file/${fileName}`);
    }, [connection.url, fileName]);

    return fileName ? (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <React.Suspense fallback={<CircularProgress />}>
                <ModelView modelURL={modelURL} />
            </React.Suspense>
        </Box>
    ) : (
        <Box
            sx={{
                background: "rgba(200, 200, 200, 0.8)",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            Load a Model to view
        </Box>
    );
}
