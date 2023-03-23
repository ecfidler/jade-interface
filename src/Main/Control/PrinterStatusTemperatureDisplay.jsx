import React from "react";

import { Typography } from "@mui/material";

export default function PrinterStatusTemperatureDisplay({
    displayName,
    temperature,
    min,
    max,
}) {
    const maxTemp = max;
    const minTemp = min;
    const [red, setRed] = React.useState(
        (255 / (maxTemp - minTemp)) * (temperature - minTemp)
    );
    const [blue, setBlue] = React.useState(
        (255 / (maxTemp - minTemp)) * (maxTemp - temperature)
    );

    React.useEffect(() => {
        setRed((255 / (maxTemp - minTemp)) * (temperature - minTemp));
        setBlue((255 / (maxTemp - minTemp)) * (maxTemp - temperature));
    }, [temperature, minTemp, maxTemp]);

    return (
        <Typography>
            {displayName}:{" "}
            <span style={{ color: `rgb(${red}, 0, ${blue})` }}>
                {temperature} °C
            </span>{" "}
        </Typography>
    );
}
