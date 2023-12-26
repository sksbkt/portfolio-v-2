import { PaletteMode, createTheme } from '@mui/material';
import { useMemo, useState } from 'react';
import { getDesignTokens } from './theme';
export const useColorTheme = () => {
    const [mode, setMode] = useState<PaletteMode>('light');
    const [ltr, setLtr] = useState<boolean>(true);

    const toggleColorMode = () => setMode((preMode) => (preMode === 'light' ? 'dark' : 'light'));
    const toggleLtr = () => setLtr((preMode) => !preMode);

    // const modifiedTheme = useMemo(
    //     () =>
    //         createTheme({
    //             ...theme,
    //             palette: {
    //                 ...theme.palette,
    //                 mode,
    //             },
    //         }),
    //     [mode]
    // );
    // return {
    //     theme: modifiedTheme,
    //     mode,
    //     toggleColorMode,
    // };
    const modifiedTheme = useMemo(() => createTheme(getDesignTokens(mode, ltr)), [mode, ltr]);
    console.log(getDesignTokens(mode, ltr));

    return {
        theme: modifiedTheme,

        mode,
        toggleColorMode,

        ltr,
        toggleLtr,
    };
};
