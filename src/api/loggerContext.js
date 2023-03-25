import * as React from "react";

/**
 * @example <caption>Example usage of add</caption>
 * add({
 *    message: "Message to be Logged",
 *    urgency: undefined (default) | "warning" | "error",
 *    timestamp: Date.now(),
 * })
 */
const LoggerContext = React.createContext({
    add: () => {},
    clear: () => {},
});

// const URGENCY = {
//     warning: "warning",
//     error: "error",
// };

export default LoggerContext;
