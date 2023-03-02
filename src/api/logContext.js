import * as React from "react";

const LogContext = React.createContext({
    log: [],
    add: () => {},
    clear: () => {},
});

export default LogContext;

/* USAGE
{
    message: "Message to be Logged",
    urgency: undefined (default) | "warning" | "error",
    timestamp: Date.now(),
}

*/
