import styles from './App.module.scss';
import { Intro } from './components/intro/intro';
import { NavBar } from './components/nav-bar/nav-bar';
import { Route, Routes } from 'react-router-dom';
import { ContactForm } from './components/contact-form/contact-form';
import { ThemeProvider } from '@mui/material/styles';

import { useThemeContext } from './theme/ThemeContextProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';
import { colorChangeHelper, colorTheme } from './theme/theme';


function App() {

    const { mode, theme, ltr } = useThemeContext();

    useEffect(() => {
        //? like this we can scss variables programmatically 
        colorChangeHelper(mode);
    }, [mode]);


    document.dir = ltr ? 'ltr' : 'rtl';
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={styles.App}>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;

// * Global variables
export const root = document.documentElement;

