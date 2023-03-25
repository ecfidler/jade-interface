import * as React from "react";

const ConnectionContext = React.createContext({ url: "", updateUrl: () => {} });

export default ConnectionContext;
