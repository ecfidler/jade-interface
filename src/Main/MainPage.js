import * as React from "react";

import { Box, Paper } from "@mui/material";

// import * as api from "../api/api";

import { useParams } from "react-router-dom";

import ConnectionContext from "../api/connectionContext";
import FileManagerSection from "./FileManager/FileManagerSection";

export default function MainPage() {
    const { connectionURL } = useParams();
    const connection = React.useContext(ConnectionContext);
    connection.updateUrl(connectionURL);

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
                        {connectionURL}
                    </Paper>
                    <Paper elevation={4} sx={{ flexBasis: "70%" }}>
                        <FileManagerSection />
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
                        paper3
                    </Paper>
                    <Paper elevation={4} sx={{ flexBasis: "40%" }}>
                        paper4
                    </Paper>
                </Box>
            </Box>
        </>
    );
}
