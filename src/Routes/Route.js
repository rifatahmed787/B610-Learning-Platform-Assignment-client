import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Blog from "../components/Blog/Blog";
import Category from "../components/Category/Category";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Checkout from "../components/pages/Checkout/Checkout";
import Course from "../components/pages/Course";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(" https://react-assignment-three-server.vercel.app/courses"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            ` https://react-assignment-three-server.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () =>
          fetch(" https://react-assignment-three-server.vercel.app/courses"),
      },
      {
        path: "/courses/:id",
        element: <Course></Course>,
        loader: ({ params }) =>
          fetch(
            ` https://react-assignment-three-server.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(" https://react-assignment-three-server.vercel.app/courses"),
      },
    ],
  },
]);
