import React from "react";

import { IconButton, CircularProgress } from "@mui/material";

import PublishIcon from "@mui/icons-material/Publish";

import ConnectionContext from "../../api/connectionContext";
import LoggerContext from "../../api/loggerContext";

import { putFile } from "../../api/api";

export default function UploadFileButton({ refreshFileList }) {
    const connection = React.useContext(ConnectionContext);
    const logger = React.useContext(LoggerContext);

    const [uploadInProgress, setUploadInProgress] = React.useState(false);

    const handleFileUpload = React.useCallback(
        (e) => {
            if (!e.target.files) {
                return;
            }

            setUploadInProgress(true);

            const file = e.target.files[0];

            putFile(connection.url, file)
                .then((res) => {
                    logger.add({
                        message: `Uploaded file: ${file.name}`,
                        timestamp: Date.now(),
                    });
                    refreshFileList(false);
                })
                .catch((e) => {
                    logger.add({
                        message: `${e}`,
                        urgency: "error",
                        timestamp: Date.now(),
                    });
                });

            setUploadInProgress(false);
        },
        [connection.url, logger, refreshFileList]
    );

    return (
        <>
            {uploadInProgress ? (
                <CircularProgress size="1.5em" />
            ) : (
                <IconButton component={"label"}>
                    <input
                        hidden
                        accept=".gcode,.stl"
                        type="file"
                        onChange={handleFileUpload}
                    />
                    <PublishIcon />
                </IconButton>
            )}
        </>
    );
}
