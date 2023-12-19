import { useState } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';
import { Intro } from './components/intro/intro';
import { Portfolio } from './components/portfolio/portfolio';
import { NavBar } from './components/nav-bar/nav-bar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <Routes>
                <Route path="/" element={<Intro />} />
            </Routes>
        </div>
    );
}

export default App;
