import * as React from "react";

import { Box } from "@mui/material";

export default function ModelTab() {
    const [model, setModel] = React.useState(false);
    // const [isConnecting, setIsConnecting] = React.useState(false);

    return model ? (
        <Box>Model</Box>
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
            Load a Model to view
        </Box>
    );
}
