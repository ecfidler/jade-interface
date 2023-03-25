import React from "react";

import { Box, Typography } from "@mui/material";

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
                <Typography sx={{ fontWeight: "500", fontSize: "1.25rem" }}>
                    {activeFileName ? `File: ${activeFileName}` : "Load a file"}
                </Typography>
                <PrinterStatusLoader
                    connectionURL={connectionURL}
                    sx={{ height: "75%" }}
                />
            </Box>
        </>
    );
}
