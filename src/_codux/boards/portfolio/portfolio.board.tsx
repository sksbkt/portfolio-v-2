import { createBoard } from '@wixc3/react-board';
import { Portfolio } from '../../../components/portfolio/portfolio';

export default createBoard({
    name: 'Portfolio',
    Board: () => <Portfolio />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 716
    }
});
