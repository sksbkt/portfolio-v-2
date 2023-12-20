import { useState } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';
import { Intro } from './components/intro/intro';
import { Portfolio } from './components/portfolio/portfolio';
import { NavBar } from './components/nav-bar/nav-bar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContactForm } from './components/contact-form/contact-form';

function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/contact" element={<ContactForm />} />
            </Routes></div>
    );
}

export default App;
