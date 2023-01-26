import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";

export default function Layout() {
    return (
        <>
            <Box sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
                <Outlet />
            </Box>
        </>
    );
}
