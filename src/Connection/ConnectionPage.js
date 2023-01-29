import * as React from "react";

import {
    Typography,
    Box,
    Button,
    CircularProgress,
    Autocomplete,
    TextField,
} from "@mui/material";

import { Wifi } from "@mui/icons-material";

export default function ConnectionPage() {
    const [connectionInProgress, setConnectionInProgress] =
        React.useState(true);

    const [connectionStatus, setConnectionStatus] =
        React.useState("Autoconnecting...");

    // Get the previous values
    const _connections = localStorage.getItem("previousConnections");

    const connections = _connections
        ? JSON.parse(localStorage.getItem("previousConnections"))
        : ["localhost"]; // 192.168.1.138:5000

    // attempt old connections
    // old connections fail
    React.useEffect(() => {
        setConnectionInProgress(false);
        setConnectionStatus("Attempting to Connect...");
    }, []);

    const [connectionInput, setConnectionInput] = React.useState("");

    const [connectionValidationError, setConnectionValidationError] =
        React.useState("");

    function handleConnectionInputChange(event) {
        setConnectionInput(event.target.value ?? "");
        console.log("fire");
    }

    function connectButtonClick(event) {
        // Add more validation here
        if (connectionInput === "") {
            setConnectionValidationError("Enter a valid hostname");
            return;
        }

        setConnectionInProgress(true);

        // TODO: Attempt connect
        // if fail: setConnectionInProgress(false)
        // prompt fail text

        if (!connections.includes(connectionInput)) {
            connections.push(connectionInput);
            localStorage.setItem(
                "previousConnections",
                JSON.stringify(connections)
            );
        }

        // if success: update the localstorage
        // nagivate to main page with the server hostname
    }

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "90vh",
                    gap: "1vh",
                }}
            >
                {connectionInProgress ? (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "1vw",
                        }}
                    >
                        <CircularProgress size="2em" />
                        <Typography variant="h5" fontWeight={"bold"}>
                            {connectionStatus}
                        </Typography>
                    </Box>
                ) : (
                    <>
                        <Typography variant="h5" fontWeight={"bold"}>
                            Connect to Printer
                        </Typography>
                        <Autocomplete
                            freeSolo
                            sx={{ width: "14em" }}
                            options={connections}
                            onInputChange={(event, inputValue) =>
                                setConnectionInput(inputValue)
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    id="connection-input"
                                    label="Hostname address"
                                    variant="filled"
                                    size="small"
                                    helperText={connectionValidationError}
                                    // value={connectionInput}
                                />
                            )}
                        />
                        <Button
                            startIcon={<Wifi />}
                            onClick={connectButtonClick}
                            variant={"outlined"}
                            sx={{ borderRadius: "100px" }}
                        >
                            Connect
                        </Button>
                    </>
                )}
            </Box>
        </>
    );
}
