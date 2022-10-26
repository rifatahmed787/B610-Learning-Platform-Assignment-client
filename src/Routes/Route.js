import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Blog from "../components/Blog/Blog";
import Category from "../components/Category/Category";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
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
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Category></Category>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
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
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/courses/:id",
        element: (
          <PrivateRoute>
            <Course></Course>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
    ],
  },
]);
