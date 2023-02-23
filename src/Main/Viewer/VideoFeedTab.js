import * as React from "react";

import { Box } from "@mui/material";

import VideocamOffIcon from "@mui/icons-material/VideocamOff";

export default function VideoFeedTab() {
    const [feed, setFeed] = React.useState(false);
    // const [isConnecting, setIsConnecting] = React.useState(false);

    return feed ? (
        <Box>Feed</Box>
    ) : (
        <Box
            sx={{
                background: "rgba(200, 200, 200, 0.8)",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <VideocamOffIcon sx={{ opacity: "0.8", fontSize: "3em" }} />
        </Box>
    );
}
