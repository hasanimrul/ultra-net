import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/SignUp/LogIn";
import Register from "../Pages/SignUp/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/log-in',
                element: <LogIn />
            }
        ]
    }
])

export default router;