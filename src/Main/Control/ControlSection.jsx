import React from "react";

import { Box, Typography } from "@mui/material";

import PrinterStatusLoader from "./PrinterStatusLoader";

import LogContext from "../../api/logContext";

export default function ControlSection({ activeFile }) {
    const logger = React.useContext(LogContext);

    const initialFileData = {
        name: "",
    };

    const [fileData, setFileData] = React.useState(initialFileData);

    React.useEffect(() => {
        // Test if the current file can be changed / make the current file changes
        logger.add({
            message: `Updating Active File: ${activeFile}`,
            urgency: undefined,
            timestamp: Date.now(),
        });

        setFileData((fileData) => ({ ...fileData, name: activeFile }));
        console.log(fileData);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeFile]);

    // React.useEffect(() => {}, [fileData]);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "flex-start",
                    margin: "5px 5% 5px 5%",
                    height: "90%",
                }}
            >
                <Typography sx={{ fontWeight: "500", fontSize: "1.25rem" }}>
                    {fileData?.name ? `File: ${fileData.name}` : "Load a file"}
                </Typography>
                <PrinterStatusLoader sx={{ height: "75%" }} />
            </Box>
        </>
    );
}
