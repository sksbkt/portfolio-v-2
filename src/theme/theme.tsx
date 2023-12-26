import { Theme, createTheme } from "@mui/material/styles";
import { amber, blue, deepOrange, grey, red, yellow } from "@mui/material/colors";
import { PaletteMode, Typography } from "@mui/material";
// import { Palette } from "@mui/icons-material";

// export const theme = createTheme({ palette: { primary: yellow } });
export const primaryColor = {
    light: {
        main: '#371A45',
    },
    dark: {
        main: '#fff',
    }
};
export const getDesignTokens = (mode: PaletteMode, ltr: boolean) => createTheme({
    palette: {
        primary: { main: '#fff' },
        secondary: { main: '#371A45' },
        divider: '#d9d9d9',
        text: {
            primary: '#fff',
            secondary: yellow[100]
        },
        background: {
            default: '#371A45',
            paper: red[100]
        },
    },
    typography: {
        body1: {
            color: '#fff'
        },
        body2: {
            color: '#fff'
        },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: yellow[500]
                }
            }
        },
    }
    // palette: {
    //     ...(

    //         ltr ?
    //             {
    //                 direction: 'ltr'

    //             } : { direction: 'rtl' }
    //     ),
    //     ...(mode === "light"
    //         ? {
    //             // palette values for light mode
    //             primary: primaryColor.light,
    //             divider: amber[200],

    //             text: {
    //                 primary: grey[900],
    //                 secondary: grey[800],
    //             },
    //         }
    //         : {
    //             // palette values for dark mode
    //             primary: primaryColor.dark,
    //             divider: deepOrange[700],
    //             background: {
    //                 default: primaryColor.dark.main,
    //                 paper: deepOrange[900],
    //             },
    //             text: {
    //                 primary: "#fff",
    //                 secondary: '#fff',
    //             },
    //         }),
    // },
});

// export default theme;