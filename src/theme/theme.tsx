import { createTheme } from "@mui/material/styles";
import { amber, blue, deepOrange, grey, red } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

const theme = createTheme({ palette: { primary: blue } });

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                // palette values for light mode
                primary: amber,
                divider: amber[200],
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
            }
            : {
                // palette values for dark mode
                primary: deepOrange,
                divider: deepOrange[700],
                background: {
                    default: deepOrange[900],
                    paper: deepOrange[900],
                },
                text: {
                    primary: "#fff",
                    secondary: grey[500],
                },
            }),
    },
});


export default theme;