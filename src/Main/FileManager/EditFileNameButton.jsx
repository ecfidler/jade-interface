import React from "react";

import {
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    Button,
    DialogActions,
    CircularProgress,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

import { patchFile } from "../../api/api";

import LoggerContext from "../../api/loggerContext";
import ConnectionContext from "../../api/connectionContext";

export default function EditFileNameButton({ name, refreshFileList }) {
    const logger = React.useContext(LoggerContext);
    const connection = React.useContext(ConnectionContext);

    const [newName, setNewName] = React.useState(name);

    const [dialogOpen, setDialogOpen] = React.useState(false);

    const [dialogLoading, setDialogLoading] = React.useState(false);

    const handleOpenButtonClick = React.useCallback(() => {
        setDialogOpen(true);
    }, []);

    const handleCloseButtonClick = React.useCallback(() => {
        setDialogOpen(false);
    }, []);

    const handleRenameFileButtonClick = React.useCallback(() => {
        setDialogLoading(true);

        patchFile(connection.url, name, newName)
            .then((res) => {
                logger.add({
                    message: `Renamed file '${name}' to '${newName}'`,
                    timestamp: Date.now(),
                });
                refreshFileList(false);
            })
            .catch((e) => {
                logger.add({
                    message: `Could not rename file: '${name}'\n ${e}`,
                    urgency: "error",
                    timestamp: Date.now(),
                });
            });

        setDialogLoading(false);
        setDialogOpen(false);
    }, [connection.url, logger, name, newName, refreshFileList]);

    return (
        <>
            <MenuItem onClick={handleOpenButtonClick}>
                <EditIcon /> Edit File Name
            </MenuItem>
            <Dialog open={dialogOpen} onClose={handleCloseButtonClick}>
                <DialogTitle>Rename {name}</DialogTitle>
                {dialogLoading ? (
                    <DialogContent>
                        <CircularProgress size="1.5em" />
                    </DialogContent>
                ) : (
                    <>
                        <DialogContent>
                            <TextField
                                autoFocus
                                key="newName"
                                label="New Name"
                                type="text"
                                fullWidth
                                value={newName}
                                onChange={(event) => {
                                    setNewName(event.target.value);
                                }}
                                variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseButtonClick}>
                                Cancel
                            </Button>
                            <Button onClick={handleRenameFileButtonClick}>
                                Rename
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </>
    );
}
