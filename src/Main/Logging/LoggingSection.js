import * as React from "react";

import { Box, Skeleton } from "@mui/material";

import LogItem from "./LogItem";

import LogContext from "../../api/logContext";

// FOR STAYING SCROLLED TO BOTTOM
// https://stackoverflow.com/a/52266212

export default function LoggingSection() {
    const logger = React.useContext(LogContext);

    return (
        <Box
            sx={{
                width: "99%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflowY: "scroll",
                justifyContent: "flex-end",
                paddingLeft: "1%",
            }}
        >
            {logger.log ? (
                logger.log.map((item, i) => {
                    return <LogItem key={i} item={item} />;
                })
            ) : (
                <Skeleton variant="rectangular"></Skeleton>
            )}
        </Box>
    );
}
