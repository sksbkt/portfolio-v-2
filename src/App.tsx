import styles from './App.module.scss';
import { Intro } from './components/intro/intro';
import { NavBar } from './components/nav-bar/nav-bar';
import { Route, Routes } from 'react-router-dom';
import { ContactForm } from './components/contact-form/contact-form';
import { ThemeProvider } from '@mui/material/styles';

import { useThemeContext } from './theme/ThemeContextProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';
import { cacheLtr, cacheRtl, colorChangeHelper } from './theme/theme';
import { CacheProvider } from '@emotion/react';


function App() {

    const { mode, theme, ltr, locale } = useThemeContext();

    useEffect(() => {
        //? like this we can scss variables programmatically 
        colorChangeHelper(mode);
    }, [mode, ltr]);


    document.dir = ltr ? 'ltr' : 'rtl';
    return (
        // ? we need CacheProvider for RTL/LTR
        <CacheProvider value={ltr ? cacheLtr : cacheRtl}>

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
        </CacheProvider>
    );
}

export default App;

// * Global variables
export const root = document.documentElement;

