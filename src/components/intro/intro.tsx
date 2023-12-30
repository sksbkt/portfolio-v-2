import classNames from 'classnames';
import styles from './intro.module.scss';
import { FaShuttleSpace } from 'react-icons/fa6';
import { Animation } from '../animation/animation';
import { motion } from 'framer-motion';
import { Portfolio } from '../portfolio/portfolio';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../theme/ThemeContextProvider';
export interface IntroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Intro = ({ className }: IntroProps) => {
    const { mode } = useThemeContext();
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <h2 className={styles.title}>Ali Khoshbakht</h2>
                <motion.svg
                    height="4"
                    viewBox="0 0 204 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classNames(styles.line, styles.path)}
                >
                    <motion.path
                        d="M2 2L202 1.99998"
                        stroke="url(#paint0_linear_6_519)"
                        stroke-width="3"
                        stroke-linecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        className={styles['path-line']}
                    />
                    <defs>{mode === 'light' ?
                        <linearGradient
                            id="paint0_linear_6_519"
                            x1="202.5"
                            y1="2"
                            x2="0.999995"
                            y2="2"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#371a45" />
                            <stop offset="1" stopColor="#a15aca" />
                        </linearGradient> :
                        <linearGradient
                            id="paint0_linear_6_519"
                            x1="202.5"
                            y1="2"
                            x2="0.999995"
                            y2="2"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#fff" />
                            <stop offset="1" stopColor="#fff" />
                        </linearGradient>
                    }
                    </defs>
                </motion.svg>
                <h3 className={styles.subtitle}>Software engineer and designer</h3>
            </div>
            <p className={styles.description}>
                Free lance providing services for programming and design context needs.
            </p>
            <Link
                className={
                    mode === 'light' ?
                        styles.letCollab :
                        styles.letsCollabDark
                }
                to={'/contact'}
            >
                <h3>Lets collaborate</h3><FaShuttleSpace className={styles.iconSend} />
            </Link>
            <Animation />
            <Portfolio />
        </div>
    );
};
