import * as React from "react";

import { Box, Skeleton } from "@mui/material";

import LogItem from "./LogItem";

import LogContext from "../../api/logContext";

// FOR STAYING SCROLLED TO BOTTOM
// https://stackoverflow.com/a/52266212

export default function LoggingSection() {
    const log = React.useContext(LogContext);
    // const logger = React.useContext(LoggerContext);

    const logEndRef = React.createRef();

    React.useEffect(() => {
        // console.log("new log added");
        logEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [log, logEndRef]);

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                maxHeight: "100%",
                overflowY: "scroll",
            }}
        >
            <Box
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "end",
                    paddingLeft: "1%",
                }}
            >
                <>
                    {log ? (
                        log.map((item, i) => {
                            return <LogItem key={i} item={item} />;
                        })
                    ) : (
                        <Skeleton variant="rectangular"></Skeleton>
                    )}
                    <div ref={logEndRef} />
                </>
            </Box>
        </Box>
    );
}
