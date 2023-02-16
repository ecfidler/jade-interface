import { Typography } from "@mui/material";
import * as React from "react";

export default function LogItem(params) {
    // urgency: warning, error, undefined
    // timestamp: needs to be formatted; probably to hh:mm:ss

    const item = params.item;

    let prefix = "";
    let color = "inherit";

    if (item?.urgency) {
        prefix = `${item.urgency.toUpperCase()}: `;
        color = `${item.urgency}.main`;
    }

    return (
        <Typography sx={{ color: color }}>
            {`${item.timestamp} ${prefix}${item.message}`}
        </Typography>
    );
}
