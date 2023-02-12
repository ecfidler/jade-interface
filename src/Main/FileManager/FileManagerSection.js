import * as React from "react";

import { Box, Typography, IconButton, Divider } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

// import ConnectionContext from "../../api/connectionContext";

export default function FileManagerSection() {
    // const connection = React.useContext(ConnectionContext);

    return (
        <Box
            sx={{
                width: "90%",
                height: "90%",
                display: "flex",
                flexDirection: "column",
                padding: "5%",
                gap: "5px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography sx={{ fontWeight: "500", fontSize: "1.25rem" }}>
                    Files
                </Typography>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </Box>
            <Divider />
        </Box>
    );
}
