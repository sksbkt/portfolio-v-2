import classNames from 'classnames';
import styles from './nav-bar.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_light.png';
import logoDark from '../../assets/logo_dark.png';
import { NightModeToggle } from '../night-mode-toggle/night-mode-toggle';
import { AddLink, LinkOff } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useThemeContext } from '../../theme/ThemeContextProvider';

export interface NavBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NavBar = ({ className }: NavBarProps) => {
    const { mode } = useThemeContext();
    return (
        <div className={classNames(styles.root, className, styles.nav)}>
            <Link to={'/'}>
                <div className={styles.logoWrapper}>
                    <img src={mode === 'light' ? logo : logoDark} alt="" />
                    <Typography>
                        Quantic Machines
                    </Typography>
                </div>
            </Link>

            <nav className={styles.navBar}>
                <NightModeToggle />
                <li>
                    <Link to={'/'}>
                        <Typography>
                            portfolio
                        </Typography>
                    </Link>
                </li>
                <li>
                    <Link to={'/contact'}>
                        <Typography>
                            Contact
                        </Typography>
                    </Link>
                </li>
            </nav>
        </div>
    );
};
