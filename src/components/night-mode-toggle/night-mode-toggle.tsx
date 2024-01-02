import { Button, Container, IconButton, Typography } from '@mui/material';
import { useThemeContext } from '../../theme/ThemeContextProvider';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
export interface NightModeToggleProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NightModeToggle = ({ className }: NightModeToggleProps) => {
    const { mode, ltr, toggleColorMode, toggleLtr, locale } = useThemeContext();
    return (
        <Container sx={{ display: 'flex', flexDirection: 'row' }}>
            <IconButton sx={{ ml: 1, borderWidth: 1, fontSize: 12, borderRadius: 10, outline: 'none', gap: 1 }} onClick={toggleColorMode} color='inherit'>
                {mode === 'light' ?
                    <>
                        {locale.theme.LIGHT}
                        <LightModeIcon />
                    </>
                    : <>
                        {locale.theme.DARK}
                        <DarkModeIcon />
                    </>
                }
            </IconButton>
            <Button variant='text' onClick={() => {
                toggleLtr();
            }}>
                <Typography>
                    {ltr ? 'EN' : 'FA'}
                </Typography>
            </Button>
        </Container>
    );
};
