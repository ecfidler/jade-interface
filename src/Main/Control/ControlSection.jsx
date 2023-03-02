import React from "react";

import { Box, Typography } from "@mui/material";

import PrinterStatusLoader from "./PrinterStatusLoader";

export default function ControlSection({ activeFile }) {
    const initialFileData = {
        name: "",
    };

    // const initialPrinterData = {
    //     status: "",
    //     temperature: "",
    // };

    // const [file, setFile] = React.useState([activeFile]);
    const [fileData, setFileData] = React.useState(initialFileData);
    // const [printerData, setPrinterData] = React.useState(initialPrinterData);

    React.useEffect(() => {
        // Test if the current file can be changed / make the current file changes

        setFileData((fileData) => ({ ...fileData, name: activeFile }));
        console.log(fileData);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeFile]);

    // React.useEffect(() => {}, [fileData]);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "flex-start",
                    margin: "5px 5% 5px 5%",
                }}
            >
                <Typography sx={{ fontWeight: "500", fontSize: "1.25rem" }}>
                    {fileData?.name ? `File: ${fileData.name}` : "Load a file"}
                </Typography>
                <PrinterStatusLoader />
            </Box>
        </>
    );
}
