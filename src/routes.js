import About from './pages/about/about';
import Auth from './pages/auth';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import NotFound from './pages/errors/not-found';
import Fruit from './pages/fruit/fruit';
import Home from './pages/home/home';

export const routes = [
    {
        path: '',
        element: <Home />
    },
    {
        path: 'auth',
        element: <Auth />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> }
        ]
    },
    {
        path: 'fruit',
        element: <Fruit />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: '*',
        element: <NotFound />
    }
];
