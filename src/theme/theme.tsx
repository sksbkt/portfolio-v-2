import { createTheme } from "@mui/material/styles";
import { amber, blue, deepOrange, grey, red } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";
import { Palette } from "@mui/icons-material";

export const theme = createTheme({ palette: { primary: blue } });
export const primaryColor = {
    light: {
        main: '#fff',
    },
    dark: {
        main: '#371A45',
    }
};
export const getDesignTokens = (mode: PaletteMode, ltr: boolean) => ({
    palette: {
        ...(

            ltr ?
                {
                    direction: 'ltr'

                } : { direction: 'rtl' }
        ),
        ...(mode === "light"
            ? {
                // palette values for light mode
                primary: primaryColor.light,
                divider: amber[200],
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
            }
            : {
                // palette values for dark mode
                primary: primaryColor.dark,
                divider: deepOrange[700],
                background: {
                    default: primaryColor.dark.main,
                    paper: deepOrange[900],
                },
                text: {
                    primary: "#fff",
                    secondary: '#fff',
                },
            }),
    },
});

export default theme;