import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllFood from "../Pages/AllFood/AllFood";
import Menu from "../Pages/Home/Menu/Menu";
import SingleFood from "../Pages/SingleFood/SingleFood";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/allFood',
          element: <AllFood></AllFood>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/singleFood/:id',
          element: <SingleFood></SingleFood>,
          loader: ({params})=>fetch(`http://localhost:5000/singleFood/${params.id}`)
        },
        {
          path: '/singleTopFood/:id',
          element: <SingleFood></SingleFood>,
          loader: ({params})=>fetch(`http://localhost:5000/singleTopFood/${params.id}`)
        }
      ]
    },
  ]);
export default router;