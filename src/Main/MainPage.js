import * as React from "react";

import { Box, Paper } from "@mui/material";

// import * as api from "../api/api";

import { useParams } from "react-router-dom";

import ConnectionContext from "../api/connectionContext";
import FileManagerSection from "./FileManager/FileManagerSection";
import LoggingSection from "./Logging/LoggingSection";
import ViewerSection from "./Viewer/ViewerSection";
import FileManagerLoader from "./FileManager/FileManagerLoader";

export default function MainPage() {
    const { connectionURL } = useParams();
    const connection = React.useContext(ConnectionContext);

    React.useEffect(() => {
        connection.updateUrl(connectionURL);
    });

    return (
        <>
            <Box
                sx={{ margin: "15px", display: "flex", gap: "15px" }}
                style={{ height: "calc(100vh - 60px)" }}
            >
                <Box
                    sx={{
                        flexBasis: "30%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                    }}
                >
                    <Paper elevation={4} sx={{ flexBasis: "30%" }}>
                        Printer Status and Control
                    </Paper>
                    <Paper elevation={4} sx={{ flexBasis: "70%" }}>
                        <FileManagerLoader />
                    </Paper>
                </Box>
                <Box
                    sx={{
                        flexBasis: "70%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                    }}
                >
                    <Paper elevation={4} sx={{ flexBasis: "65%" }}>
                        <ViewerSection />
                    </Paper>

                    <Paper
                        elevation={4}
                        sx={{
                            flexBasis: "40%",
                            maxHeight: "40%",
                            backgroundColor: "rgba(225, 225, 225, 0.9)",
                        }}
                    >
                        <LoggingSection />
                    </Paper>
                </Box>
            </Box>
        </>
    );
}
