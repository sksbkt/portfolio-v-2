import classNames from 'classnames';
import styles from './night-mode-toggle.module.scss';
import { Box, IconButton } from '@mui/material';
import { useThemeContext } from '../../theme/ThemeContextProvider';

export interface NightModeToggleProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NightModeToggle = ({ className }: NightModeToggleProps) => {
    const { mode, toggleColorMode } = useThemeContext();
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'Background.default',
            color: 'text.primary',
            borderColor: 'text.primary',
            border: '1px solid',
            borderRadius: 25,
            p: 2
        }}>
            {mode} mode
            <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color='inherit'>
                {mode === 'dark' ? 'Dark' : 'Light'}
            </IconButton>
        </Box>
    );
};
