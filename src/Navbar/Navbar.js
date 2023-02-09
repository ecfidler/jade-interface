import * as React from "react";

import DiamondIcon from "@mui/icons-material/Diamond";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";

import { Typography, Box } from "@mui/material";

import ConnectionContext from "../api/connectionContext";

const navButtonSX = {
    width: "35px",
    height: "30px",
    "&:hover": {
        backgroundColor: "#231F20",
        color: "rgb(253, 237, 176)",
        cursor: "pointer",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

function minimizeButtonClick() {
    window.electron.control.minimize();
}

function closeButtonClick() {
    window.electron.control.close();
}

export default function Navbar() {
    const connection = React.useContext(ConnectionContext);

    const [topText, setTopText] = React.useState("JADE");

    React.useEffect(() => {
        setTopText(`JADE ${connection.url ? `@ ${connection.url}` : ""}`);
    }, [connection.url]);

    return (
        <>
            <Box
                sx={{
                    width: "100vw",
                    height: "30px",
                    backgroundColor: "#006641",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    userSelect: "none",
                }}
                style={{ WebkitAppRegion: "drag" }}
            >
                <Box
                    sx={{
                        display: "flex",
                    }}
                >
                    {" "}
                    <DiamondIcon />
                    <Typography fontWeight={"bold"}>{topText}</Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                    }}
                    style={{ WebkitAppRegion: "no-drag" }}
                >
                    <Box sx={navButtonSX} onClick={minimizeButtonClick}>
                        <MinimizeIcon />
                    </Box>
                    <Box sx={navButtonSX} onClick={closeButtonClick}>
                        <CloseIcon />
                    </Box>
                </Box>
            </Box>
        </>
    );
}
