import * as React from "react";

import { useNavigate } from "react-router-dom";

import {
    Typography,
    Box,
    Button,
    CircularProgress,
    Autocomplete,
    TextField,
} from "@mui/material";

import { Wifi } from "@mui/icons-material";

import * as api from "../api/api";

import ConnectionContext from "../api/connectionContext";

export default function ConnectionPage() {
    const navigate = useNavigate();

    const connection = React.useContext(ConnectionContext);

    const [connectionInProgress, setConnectionInProgress] =
        React.useState(true);

    const [connectionStatus, setConnectionStatus] = React.useState(
        "Attempting to Autoconnect..."
    );

    const _previousConnections = localStorage.getItem("previousConnections");

    const previousConnections = React.useMemo(() => {
        return _previousConnections
            ? JSON.parse(localStorage.getItem("previousConnections"))
            : ["localhost"]; // 192.168.1.134:5000
    }, [_previousConnections]);

    const [connectionInput, setConnectionInput] = React.useState("");

    const [connectionValidationError, setConnectionValidationError] =
        React.useState("");

    React.useEffect(() => {
        // Automatically attempt to connect on open
        async function autoConnect() {
            const response = await api.attemptMultipleConnections(
                previousConnections
            );
            return response;
        }
        autoConnect()
            .then((c) => {
                if (c) {
                    connection.updateUrl(c);
                    setConnectionStatus("Connection Succeeded!");

                    navigate(`/main/${c}`);
                } else {
                    setConnectionInProgress(false);
                }
            })
            .catch((e) => {
                setConnectionInProgress(false);
            });
    }, [previousConnections, connection, navigate]);

    function connectButtonClick(event) {
        // Add more validation here
        if (connectionInput === "") {
            setConnectionValidationError("Enter a valid hostname");
            return;
        }

        setConnectionStatus("Attempting to Connect...");
        setConnectionInProgress(true);

        api.attemptConnection(connectionInput)
            .then((c) => {
                if (c) {
                    connection.updateUrl(c);
                    setConnectionStatus("Connection Succeeded!");

                    if (!previousConnections.includes(connectionInput)) {
                        previousConnections.push(connectionInput);
                        localStorage.setItem(
                            "previousConnections",
                            JSON.stringify(previousConnections)
                        );
                    }

                    navigate(`/main/${c}`);
                    return;
                } else {
                    setConnectionInProgress(false);
                    setConnectionValidationError("Invalid Address");
                }
            })
            .catch((e) => {
                setConnectionInProgress(false);
                setConnectionValidationError("Invalid Address");
            });
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
                            options={previousConnections}
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
