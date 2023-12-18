import { useState } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';
import { Intro } from './components/intro/intro';
import { Portfolio } from './components/portfolio/portfolio';

function App() {
    const [count, setCount] = useState(0);

    return <div className={styles.App}>
        <Intro />
        <Portfolio />
    </div>;
}

export default App;
