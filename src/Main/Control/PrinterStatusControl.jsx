import React from "react";

import { Box, Typography, IconButton, ButtonGroup } from "@mui/material";

import { PlayArrow } from "@mui/icons-material";
import { Pause } from "@mui/icons-material";
import { Stop } from "@mui/icons-material";

export default function PrinterStatusControl({}) {
    return (
        <Box>
            <Typography>Printer Status: </Typography>
            <Typography>Temperature: </Typography>
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
        </Box>
    );
}
