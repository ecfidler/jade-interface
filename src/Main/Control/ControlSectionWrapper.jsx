import React from "react";

import ControlSection from "./ControlSection";

import ConnectionContext from "../../api/connectionContext";

export default function ControlSectionWrapper({ activeFileName }) {
    const connection = React.useContext(ConnectionContext);

    if (connection.url == null) {
        // TODO skeleton?
        return null;
    }

    return (
        <>
            <ControlSection
                activeFileName={activeFileName}
                connectionURL={connection.url}
            />
        </>
    );
}
