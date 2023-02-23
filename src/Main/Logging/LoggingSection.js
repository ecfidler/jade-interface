import * as React from "react";

import { Box, Skeleton } from "@mui/material";

import LogItem from "./LogItem";

import LogContext from "../../api/logContext";

// FOR STAYING SCROLLED TO BOTTOM
// https://stackoverflow.com/a/52266212

export default function LoggingSection() {
    const logger = React.useContext(LogContext);

    const logEndRef = React.createRef();

    const scrollToBottom = () => {
        logEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(() => {
        console.log("new log added");
        scrollToBottom();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [logger.log]);

    React.useEffect(() => {
        for (let i = 0; i < 12; i++) {
            logger.add({
                message: `logged ${i}`,
                urgency: "warning",
                timestamp: Date.now(),
            });
        }
        logger.add({
            message: `lastTest`,
            urgency: "error",
            timestamp: Date.now(),
        });
        scrollToBottom();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    {logger.log ? (
                        logger.log.map((item, i) => {
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
