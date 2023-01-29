import { createTheme } from "@mui/material/styles";

/*
for more customization
https://mui.com/material-ui/customization/palette/
*/

const theme = createTheme({
    palette: {
        primary: {
            main: "#231F20",
            dark: "#FDEDB0",
            light: "#CFBFB5",
        },
        secondary: {
            dark: "#008F5A",
            main: "#00A86B",
            light: "#68B490",
        },
        warning: {
            main: "#E2973C",
        },
        error: {
            main: "#C62F39",
        },
    },
    typography: {
        allVariants: {
            color: "#231F20",
        },
        button: {
            textTransform: "none",
        },
    },
});
// #CCA43B

export default theme;
