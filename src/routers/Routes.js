import About from "../pages/AboutPages/About";
import Contact from "../pages/ContactPages/Contact";
import ErrorPage from "../pages/ErrorPages/ErrorPage";
import Home from "../pages/HomePages/Home";
import Login from "../pages/LoginPages/Login";
import MenuPage from "../pages/MenuPages/MenuPage";
import Products from "../pages/ProductsPages/Products";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayouts } = require("../components/layouts/MainLayouts");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
