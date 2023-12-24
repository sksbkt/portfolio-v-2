import { createBoard } from '@wixc3/react-board';
import { NightModeToggle } from '../../../components/night-mode-toggle/night-mode-toggle';

export default createBoard({
    name: 'NightModeToggle',
    Board: () => <NightModeToggle />,
    isSnippet: true,
});
