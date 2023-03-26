import React from "react";

import { Box, Typography, Tooltip } from "@mui/material";

import PrinterStatusLoader from "./PrinterStatusLoader";

export default function ControlSection({ activeFileName, connectionURL }) {
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
                <Tooltip arrow title={activeFileName}>
                    <Typography
                        noWrap
                        sx={{
                            maxWidth: "312px",
                            height: "2.5rem",
                            fontWeight: "500",
                            fontSize: "1.25rem",
                        }}
                    >
                        {activeFileName
                            ? `File: ${activeFileName}`
                            : "Load a file"}
                    </Typography>
                </Tooltip>
                <PrinterStatusLoader
                    connectionURL={connectionURL}
                    sx={{ height: "75%" }}
                />
            </Box>
        </>
    );
}
