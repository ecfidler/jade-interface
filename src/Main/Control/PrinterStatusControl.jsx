import React from "react";

import { Box, Typography, IconButton, ButtonGroup } from "@mui/material";

import { PlayArrow } from "@mui/icons-material";
import { Stop } from "@mui/icons-material";
import PrinterStatusTemperatureDisplay from "./PrinterStatusTemperatureDisplay";

export default function PrinterStatusControl({
    status,
    bedTemperature,
    hotEndTemperature,
}) {
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
                <PrinterStatusTemperatureDisplay
                    displayName={"Bed Temperature"}
                    temperature={bedTemperature}
                    min={0}
                    max={100}
                />
                <PrinterStatusTemperatureDisplay
                    displayName={"Hot-End Temperature"}
                    temperature={hotEndTemperature}
                    min={0}
                    max={400}
                />
            </Box>
            <ButtonGroup variant="contained">
                <IconButton>
                    {" "}
                    <PlayArrow />{" "}
                </IconButton>
                <IconButton>
                    {" "}
                    <Stop />{" "}
                </IconButton>
            </ButtonGroup>
        </>
    );
}
