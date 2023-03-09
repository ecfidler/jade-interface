import React from "react";

import { Typography } from "@mui/material";

export default function PrinterStatusTemperatureDisplay({
    displayName,
    temperature,
    min,
    max,
}) {
    // what range to I want here?
    const maxTemp = max;
    const minTemp = min;
    const redVal = (255 / (maxTemp - minTemp)) * (temperature - minTemp);
    const blueVal = (255 / (maxTemp - minTemp)) * (maxTemp - temperature);
    return (
        <Typography>
            {displayName}:{" "}
            <span sx={{ backgroundColor: `rgb(${redVal}, 0, ${blueVal})` }}>
                {temperature} C
            </span>{" "}
        </Typography>
    );
}
