import { createTheme } from "@mui/material/styles";

/*
for more customization
https://mui.com/material-ui/customization/palette/
*/

const theme = createTheme({
    palette: {
        primary: {
            main: "#231F20", // raisin
            dark: "#FDEDB0", // parchment
            light: "#CFBFB5", // pale
        },
        secondary: {
            // greens
            dark: "#008F5A",
            main: "#00A86B",
            light: "#68B490",
        },
        warning: {
            main: "#E2973C", // orange
        },
        error: {
            main: "#C62F39", // red
        },
    },
    typography: {
        allVariants: {
            color: "#231F20",
            marginBottom: "unset",
        },
        button: {
            textTransform: "none",
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: "rgba(255, 255, 255, 0.85)",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "100px",
                },
            },
        },
    },
});
// #CCA43B

export default theme;
