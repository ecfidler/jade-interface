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
} from "@mui/material";

import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PublishIcon from "@mui/icons-material/Publish";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function FilesListItem({ file }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpenMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ListItem disableGutters key={file.name}>
            <ListItemAvatar>
                <Avatar>
                    <InsertDriveFileIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText>{file.name}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton>
                    <PublishIcon />
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
