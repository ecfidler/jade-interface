import React from "react";

import { Typography } from "@mui/material";

export default function PrinterStatusTemperatureDisplay({ temperature }) {
    // what range to I want here?
    const maxTemp = 100;
    const minTemp = 0;
    const redVal = (255 / (maxTemp - minTemp)) * (temperature - minTemp);
    const blueVal = (255 / (maxTemp - minTemp)) * (maxTemp - temperature);
    return (
        <Typography>
            Temperature:{" "}
            <span sx={{ backgroundColor: `rgb(${redVal}, 0, ${blueVal})` }}>
                {temperature}
            </span>{" "}
        </Typography>
    );
}
