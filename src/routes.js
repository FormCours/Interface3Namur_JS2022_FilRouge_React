import About from './pages/about/about';
import NotFound from './pages/errors/not-found';
import Fruit from './pages/fruit/fruit';
import Home from './pages/home/home';

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/fruit',
        element: <Fruit />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '*',
        element: <NotFound />
    }
];
