import classNames from 'classnames';
import styles from './nav-bar.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_light.png';

export interface NavBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(styles.root, className, styles.nav)}>
            <Link to={'/'}>
                <div className={styles.logoWrapper}>
                    <img src={logo} alt="" />
                    <p className={styles.logo}>Quantic Machines</p>
                </div>
            </Link>
            <nav className={styles.navBar}>
                <li>
                    <Link to={'/'}>Portfolio</Link>
                </li>
                <li>
                    <Link to={'/'}>Contact</Link>
                </li>
            </nav>
        </div>
    );
};
