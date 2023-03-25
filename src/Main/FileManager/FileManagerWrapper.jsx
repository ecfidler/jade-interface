import React from "react";

import FileManagerLoader from "./FileManagerLoader";

import ConnectionContext from "../../api/connectionContext";

export default function FileManagerWrapper({ updateActiveFileName }) {
    const connection = React.useContext(ConnectionContext);

    if (connection.url == null) {
        // TODO skeleton?
        return null;
    }

    return (
        <FileManagerLoader
            updateActiveFileName={updateActiveFileName}
            connectionURL={connection.url}
        />
    );
}
