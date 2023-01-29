import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";

export default function Layout() {
    return (
        <>
            <Box
                sx={{
                    width: "100vw",
                    height: "100vh",
                    overflow: "hidden",
                    background:
                        "linear-gradient(120deg, rgb(0, 168, 107) 50%, rgb(253, 237, 176) 100%)",
                }}
            >
                <Outlet />
            </Box>
        </>
    );
}
