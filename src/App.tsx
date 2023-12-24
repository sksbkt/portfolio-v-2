import { useState } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';
import { Intro } from './components/intro/intro';
import { Portfolio } from './components/portfolio/portfolio';
import { NavBar } from './components/nav-bar/nav-bar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContactForm } from './components/contact-form/contact-form';
import { ThemeProvider } from '@mui/material/styles';

import { NightModeToggle } from './components/night-mode-toggle/night-mode-toggle';
import { useThemeContext } from './theme/ThemeContextProvider';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
    const { theme } = useThemeContext();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NightModeToggle />
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
