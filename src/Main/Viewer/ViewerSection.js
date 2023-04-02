import * as React from "react";

import { Box, Tab, Tabs } from "@mui/material";

import { a11yProps, TabPanel } from "./ViewerTabs";
import VideoFeedTab from "./VideoFeedTab";
import ModelTab from "./ModelTab";

// import ConnectionContext from "../../api/connectionContext";
// import LogContext from "../../api/logContext";

export default function ViewerSection({ fileName }) {
    const [tabValue, setTabValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ width: "98%", margin: "0 auto", height: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="3d Model View" {...a11yProps(0)} />
                    <Tab label="Video Feed" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel
                value={tabValue}
                index={0}
                style={{ width: "95%", height: "80%" }}
            >
                <ModelTab fileName={fileName} />
            </TabPanel>
            <TabPanel
                value={tabValue}
                index={1}
                style={{ width: "95%", height: "80%" }}
            >
                <VideoFeedTab />
            </TabPanel>
        </Box>
    );
}
