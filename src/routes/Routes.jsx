
import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import News from '../News';
import PrivateRoute from '../PrivateRoute';




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;