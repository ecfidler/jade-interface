import * as React from "react";

import {
    Avatar,
    IconButton,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Tooltip,
} from "@mui/material";

import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

import { deleteFile } from "../../api/api";

import LoggerContext from "../../api/loggerContext";
import ConnectionContext from "../../api/connectionContext";
import EditFileNameButton from "./EditFileNameButton";

export default function FilesListItem({
    file,
    loadFile,
    refreshFileList,
    viewFile,
}) {
    const logger = React.useContext(LoggerContext);
    const connection = React.useContext(ConnectionContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpenMenuClick = React.useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = React.useCallback(() => {
        setAnchorEl(null);
    }, []);

    const handleLoadFileButton = React.useCallback(() => {
        loadFile(file.name);
    }, [loadFile, file.name]);

    const handleDeleteFileButton = React.useCallback(() => {
        deleteFile(connection.url, file.name)
            .then((res) => {
                logger.add({
                    message: `File Deleted: ${file.name}`,
                    urgency: "warning",
                    timestamp: Date.now(),
                });
                refreshFileList(false);
            })
            .catch((e) => {
                logger.add({
                    message: `Deletion of ${file.name} failed.\n${e}`,
                    urgency: "error",
                    timestamp: Date.now(),
                });
            });
        handleClose();
    }, [connection.url, file.name, handleClose, logger, refreshFileList]);

    const handleViewFileButton = React.useCallback(() => {
        viewFile(file.name);
        handleClose();
    }, [file.name, handleClose, viewFile]);

    return (
        <ListItem disableGutters key={file.name}>
            <ListItemAvatar>
                <Avatar>
                    <InsertDriveFileIcon />
                </Avatar>
            </ListItemAvatar>
            <Tooltip arrow title={file.name}>
                <ListItemText
                    primaryTypographyProps={{
                        noWrap: true,
                        maxWidth: "180px",
                    }}
                >
                    {file.name}
                </ListItemText>
            </Tooltip>
            <ListItemSecondaryAction>
                <Tooltip arrow title={"Load"}>
                    <IconButton onClick={handleLoadFileButton}>
                        <FileOpenIcon />
                    </IconButton>
                </Tooltip>
                <IconButton onClick={handleOpenMenuClick}>
                    <MoreHorizIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >
                    <EditFileNameButton
                        name={file.name}
                        refreshFileList={refreshFileList}
                        handleClose={handleClose}
                    />
                    <MenuItem onClick={handleDeleteFileButton}>
                        <DeleteIcon /> Delete File
                    </MenuItem>
                    <MenuItem onClick={handleViewFileButton}>
                        <ViewInArIcon /> View Model
                    </MenuItem>
                </Menu>
            </ListItemSecondaryAction>
        </ListItem>
    );
}
