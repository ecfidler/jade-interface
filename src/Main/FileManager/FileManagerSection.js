import * as React from "react";

import { Box, Typography, Divider, List, Skeleton } from "@mui/material";

import FilesListItem from "./FilesListItem";
import LoggerContext from "../../api/loggerContext";
import UploadFileButton from "./UploadFileButton";

export default function FileManagerSection({
    files,
    updateActiveFile,
    refreshFileList,
    viewFile,
}) {
    const logger = React.useContext(LoggerContext);

    const setActiveFileNameAndLog = React.useCallback(
        (name) => {
            logger.add({
                message: `Updating Active File: ${name}`,
                urgency: undefined,
                timestamp: Date.now(),
            });

            updateActiveFile(name);
        },
        [logger, updateActiveFile]
    );

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
                <UploadFileButton refreshFileList={refreshFileList} />
            </Box>
            <Divider />
            <List>
                {files ? (
                    files.map((file, i) => {
                        return (
                            <FilesListItem
                                key={i}
                                file={file}
                                loadFile={setActiveFileNameAndLog}
                                refreshFileList={refreshFileList}
                                viewFile={viewFile}
                            />
                        );
                    })
                ) : (
                    <Skeleton variant="rectangular"></Skeleton>
                )}
            </List>
        </Box>
    );
}
