import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import { ComicDetail } from './components/ComicDetail';
import { Characters } from './routes/Characters';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'comics/:comicId',
				element: <ComicDetail />,
			},
			{
				path: 'characters',
				element: <Characters />,
			},
		],
	},
]);

export default router;
