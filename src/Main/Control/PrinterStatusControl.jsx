import React from "react";

import { Box, Typography, IconButton } from "@mui/material";

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
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <IconButton
                    sx={{
                        width: "48%",
                        borderRadius: "100px",
                        backgroundColor: "#00A86B",
                        "&:hover": {
                            backgroundColor: "#68B490",
                            color: "rgba(0,0,0,.8)",
                        },
                    }}
                    variant="contained"
                >
                    {" "}
                    <PlayArrow />{" "}
                </IconButton>
                <IconButton
                    sx={{
                        width: "48%",
                        borderRadius: "100px",
                        backgroundColor: "#00A86B",
                        "&:hover": {
                            backgroundColor: "#68B490",
                            color: "rgba(0,0,0,.8)",
                        },
                    }}
                    variant="contained"
                >
                    {" "}
                    <Stop />{" "}
                </IconButton>
            </Box>
        </>
    );
}
