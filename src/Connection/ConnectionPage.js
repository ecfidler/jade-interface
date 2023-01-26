import * as React from "react";

import {
    Typography,
    Box,
    Button,
    CircularProgress,
    Autocomplete,
    TextField,
} from "@mui/material";

export default function ConnectionPage() {
    const [connectionInProgress, setConnectionInProgress] =
        React.useState(false);

    const [pastConnections] = React.useState(["192.168.1.138:5000"]); // TODO: Get actual data from cache

    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "90vh",
                }}
            >
                {connectionInProgress ? (
                    <>
                        <CircularProgress />
                        <Typography variant="h5" fontWeight={"bold"}>
                            Attempting to Connect...
                        </Typography>
                    </>
                ) : (
                    <>
                        <Typography variant="h5" fontWeight={"bold"}>
                            Connect to Printer
                        </Typography>
                        <Autocomplete
                            freeSolo
                            sx={{ width: "14em" }}
                            options={pastConnections}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    id="outlined-basic"
                                    label="Address"
                                    variant="filled"
                                    size="small"
                                />
                            )}
                        />
                    </>
                )}
            </Box>
        </Box>
    );
}
