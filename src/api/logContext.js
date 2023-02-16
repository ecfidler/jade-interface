import * as React from "react";

const LogContext = React.createContext({
    log: [],
    add: () => {},
    clear: () => {},
});

export default LogContext;
