import { PaletteMode, createTheme } from '@mui/material';
import { useMemo, useState } from 'react';
import theme, { getDesignTokens } from './theme';
export const useColorTheme = () => {
    const [mode, setMode] = useState<PaletteMode>('light');

    const toggleColorMode = () => setMode((preMode) => (preMode === 'light' ? 'dark' : 'light'));

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
    const modifiedTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    };
};
