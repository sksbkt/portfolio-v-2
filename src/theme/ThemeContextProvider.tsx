import { Theme, createTheme } from "@mui/material";
import { FC, PropsWithChildren, createContext, useContext } from "react";
import { useColorTheme } from "./use-color-theme";
import en_locale from "../locales/en_en/en_locale";

type ThemeContextType = {
    mode: string;
    ltr: boolean;
    toggleColorMode: () => void;
    toggleLtr: () => void;
    theme: Theme;
    locale: typeof en_locale;
}
// ? we create a react context here so we can access it globally to change theme
export const ThemeContext = createContext<ThemeContextType>({
    mode: 'light',
    ltr: false,
    toggleLtr: () => { },
    toggleColorMode: () => { },
    theme: createTheme(),
    locale: en_locale
});

export const TheContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const value = useColorTheme();
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export const useThemeContext = () => {
    return useContext(ThemeContext);
}