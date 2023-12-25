import styles from './App.module.scss';
import { Intro } from './components/intro/intro';
import { NavBar } from './components/nav-bar/nav-bar';
import { Route, Routes } from 'react-router-dom';
import { ContactForm } from './components/contact-form/contact-form';
import { ThemeProvider } from '@mui/material/styles';

import { useThemeContext } from './theme/ThemeContextProvider';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
    const { theme, ltr } = useThemeContext();

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
