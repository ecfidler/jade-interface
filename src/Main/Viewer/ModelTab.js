import * as React from "react";

import { Box, CircularProgress } from "@mui/material";

import ModelView from "./ModelView";

export default function ModelTab() {
    const [model, setModel] = React.useState("3DBenchy.stl");

    return model ? (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <React.Suspense fallback={<CircularProgress />}>
                <ModelView modelName={model} />
            </React.Suspense>
        </Box>
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
