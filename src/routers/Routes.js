import Home from "../pages/HomePages/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayouts } = require("../components/layouts/MainLayouts");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <>this is error</>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
