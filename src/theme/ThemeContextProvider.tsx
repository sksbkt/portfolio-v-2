import { Theme, createTheme } from "@mui/material";
import { FC, PropsWithChildren, createContext, useContext } from "react";
import { useColorTheme } from "./use-color-theme";

type ThemeContextType = {
    mode: string;
    ltr: boolean;
    toggleColorMode: () => void;
    toggleLtr: () => void;
    theme: Theme;
}
// ? we create a react context here so we can access it globally to change theme
export const ThemeContext = createContext<ThemeContextType>({
    mode: 'light',
    ltr: false,
    toggleLtr: () => { },
    toggleColorMode: () => { },
    theme: createTheme()
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