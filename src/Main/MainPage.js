import * as React from "react";

import { Box, Paper } from "@mui/material";

// import * as api from "../api/api";

import { useParams } from "react-router-dom";

import ConnectionContext from "../api/connectionContext";
import LoggingSection from "./Logging/LoggingSection";
import ViewerSection from "./Viewer/ViewerSection";
import FileManagerLoader from "./FileManager/FileManagerLoader";
import ControlSection from "./Control/ControlSection";

export default function MainPage() {
    const { connectionURL } = useParams();
    const connection = React.useContext(ConnectionContext);

    const [activeFileName, setActiveFileName] = React.useState("");

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
                        <ControlSection activeFile={activeFileName} />
                    </Paper>
                    <Paper elevation={4} sx={{ flexBasis: "70%" }}>
                        <FileManagerLoader
                            updateActiveFileName={setActiveFileName}
                        />
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
                    <Paper elevation={4} sx={{ flexBasis: "70%" }}>
                        <ViewerSection />
                    </Paper>

                    <Paper
                        elevation={4}
                        sx={{
                            flexBasis: "30%",
                            maxHeight: "30%",
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
