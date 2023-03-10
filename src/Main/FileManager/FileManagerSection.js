import * as React from "react";

import {
    Box,
    Typography,
    Divider,
    IconButton,
    List,
    Skeleton,
} from "@mui/material";

import PublishIcon from "@mui/icons-material/Publish";

import FilesListItem from "./FilesListItem";

// import ConnectionContext from "../../api/connectionContext";

export default function FileManagerSection({ files, updateActiveFile }) {
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
                    <PublishIcon />
                </IconButton>
            </Box>
            <Divider />
            <List>
                {files ? (
                    files.map((file, i) => {
                        return (
                            <FilesListItem
                                key={i}
                                file={file}
                                loadFile={updateActiveFile}
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
