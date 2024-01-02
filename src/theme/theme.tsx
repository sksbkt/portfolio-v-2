import { Theme, createTheme } from "@mui/material/styles";
import { amber, blue, deepOrange, grey, red, yellow } from "@mui/material/colors";
import { PaletteMode, Typography } from "@mui/material";
import { root } from "../App";

import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';

import { prefixer } from 'stylis';
// import { Palette } from "@mui/icons-material";

// export const theme = createTheme({ palette: { primary: yellow } });
// export const primaryColor = {
//     light: {
//         main: '#371A45',
//     },
//     dark: {
//         main: '#fff',
//     }
// };
export const getDesignTokens = (mode: PaletteMode, ltr: boolean) => createTheme({
    direction: ltr ? 'ltr' : 'rtl',
    ...(mode === 'light' ? {
        palette: {

            primary: { main: '#371A45' },
            secondary: { main: '#fff' },
            divider: '#d9d9d9',
            text: {
                primary: '#371A45',
                secondary: yellow[100]
            },
            background: {
                default: '#fff',
                paper: red[100]
            },
        },
        typography: {
            body1: {
                color: '#371A45'
            },
            body2: {
                color: '#371A45'
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
    } : {
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
            }, MuiTextField: {
                styleOverrides: {
                    root: {
                        border: 0,
                        backgroundColor: '#371A45'
                    }
                }
            }, MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        scrollbarColor: "#6b6b6b #2b2b2b",
                        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                            backgroundColor: "#2b2b2b",
                            borderRadius: 8,
                        },
                        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                            borderRadius: 8,
                            backgroundColor: "#6b6b6b",
                            minHeight: 24,
                            border: "3px solid #2b2b2b",
                        },
                        "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                            backgroundColor: "#959595",
                        },
                        "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                            backgroundColor: "#959595",
                        },
                        "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                            backgroundColor: "#959595",
                        },
                        "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                            backgroundColor: "#2b2b2b",
                        },
                    },
                },
            },
        }
    }),
    ...({
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        scrollbarColor: "#6b6b6b #2b2b2b",
                        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                            backgroundColor: "#2b2b2b",
                            borderRadius: 8,
                        },
                        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                            borderRadius: 8,
                            backgroundColor: "#6b6b6b",
                            minHeight: 24,
                            border: "3px solid #2b2b2b",
                        },
                        "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                            backgroundColor: "#959595",
                        },
                        "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                            backgroundColor: "#959595",
                        },
                        "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                            backgroundColor: "#959595",
                        },
                        "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                            backgroundColor: "#2b2b2b",
                        },
                    },
                },
            },
        }
    })
});

export const colorTheme = {
    dark: {
        mainColor: '#fff',
        secondaryColor: '#5f2d77',
    },
    light: {
        mainColor: '#5f2d77',
        secondaryColor: '#fff',
    }
}
// ? @emotion caches
// ? RTL/LTR caches
export const cacheLtr = createCache({
    key: 'muiltr',
});
export const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});
// ? HELPERS
export const colorChangeHelper = (mode: string) => {
    //? like this we can scss variables programmatically 
    root?.style.setProperty('--main-color', mode === 'light' ? colorTheme.light.mainColor : colorTheme.dark.mainColor);
    root?.style.setProperty('--secondary-color', mode === 'light' ? colorTheme.light.secondaryColor : colorTheme.dark.secondaryColor);
}
