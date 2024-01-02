import { PaletteMode, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { getDesignTokens } from "./theme";
import en_locale from "../locales/en_en/en_locale";
import fa_locale from "../locales/en_en/fa_locale";
export const useColorTheme = () => {
    const [mode, setMode] = useState<PaletteMode>("light");

    const [ltr, setLtr] = useState<boolean>(true);
    const [locale, setLocale] = useState(en_locale);

    const toggleColorMode = () => setMode((preMode) => (preMode === "light" ? "dark" : "light"));

    // ? like this we wont have the issues with asynchronous nature of the setState function
    const toggleLtr = () => {
        setLtr((preMode) => {
            const newLtr = !preMode;
            setLocale(newLtr ? en_locale : fa_locale);
            return newLtr;
        });
    };

    const modifiedTheme = useMemo(() => createTheme(getDesignTokens(mode, ltr)), [mode, ltr]);

    return {
        theme: modifiedTheme,

        mode,
        toggleColorMode,

        ltr,
        toggleLtr,
        locale,
    };
};
