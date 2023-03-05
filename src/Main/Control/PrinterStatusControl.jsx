import React from "react";

import { Box, Typography, IconButton, ButtonGroup } from "@mui/material";

import { PlayArrow } from "@mui/icons-material";
import { Pause } from "@mui/icons-material";
import { Stop } from "@mui/icons-material";

export default function PrinterStatusControl({ status, temperature }) {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    height: "100%",
                }}
            >
                <Typography>Printer Status: {status} </Typography>
                <Typography>Temperature: {temperature} </Typography>
            </Box>
            <ButtonGroup variant="contained">
                <IconButton>
                    {" "}
                    <PlayArrow />{" "}
                </IconButton>
                <IconButton>
                    {" "}
                    <Pause />{" "}
                </IconButton>
                <IconButton>
                    {" "}
                    <Stop />{" "}
                </IconButton>
            </ButtonGroup>
        </>
    );
}
