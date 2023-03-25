import React from "react";
import FileManagerSection from "./FileManagerSection";

import { getFilesList } from "../../api/api";

import LoggerContext from "../../api/loggerContext";

export default function FileManagerLoader({
    updateActiveFileName,
    connectionURL,
}) {
    const logger = React.useContext(LoggerContext);

    const [files, setFiles] = React.useState([
        { name: "fileone.stl" },
        { name: "filetwo.stl" },
        { name: "filethree.stl" },
        { name: "3dBenchy.stl" },
    ]);

    React.useEffect(() => {
        (async () => {
            try {
                const listPromise = await getFilesList(connectionURL);
                setFiles(listPromise.data);
                logger.add({
                    message: `Loaded files! 🕶`,
                    timestamp: Date.now(),
                });
            } catch {
                logger.add({
                    message: `Error Loading files`,
                    urgency: "error",
                    timestamp: Date.now(),
                });
            }
        })();
    }, [connectionURL, logger]);

    return (
        <FileManagerSection
            files={files}
            updateActiveFile={updateActiveFileName}
        />
    );
}
