import React, { useCallback } from "react";
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

    const refreshFileList = useCallback(
        (logRefresh = true) => {
            (async () => {
                try {
                    const listPromise = await getFilesList(connectionURL);
                    setFiles(listPromise.data);
                    if (logRefresh) {
                        logger.add({
                            message: `Loaded files! 🕶`,
                            timestamp: Date.now(),
                        });
                    }
                } catch {
                    logger.add({
                        message: `Error Loading files`,
                        urgency: "error",
                        timestamp: Date.now(),
                    });
                }
            })();
        },
        [connectionURL, logger]
    );

    React.useEffect(refreshFileList, [refreshFileList]);

    return (
        <FileManagerSection
            files={files}
            updateActiveFile={updateActiveFileName}
            refreshFileList={refreshFileList}
        />
    );
}
