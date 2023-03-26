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
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import LaunchIcon from "@mui/icons-material/Launch";
import FileOpenIcon from "@mui/icons-material/FileOpen";

export default function FilesListItem({ file, loadFile }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    // TODO convert arrow funcs to `React.useCallback`s
    const handleOpenMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLoadFileButton = () => {
        loadFile(file.name);
    };

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
                        noWrap: "true",
                        maxWidth: "180px",
                    }}
                >
                    {file.name}
                </ListItemText>
            </Tooltip>
            <ListItemSecondaryAction>
                <IconButton onClick={handleLoadFileButton}>
                    <FileOpenIcon />
                </IconButton>

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
                    <MenuItem>
                        <EditIcon /> Edit File Name
                    </MenuItem>
                    <MenuItem>
                        <DeleteIcon /> Delete File
                    </MenuItem>
                </Menu>
            </ListItemSecondaryAction>
        </ListItem>
    );
}
