import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import Home from "../assets/pages/Home/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ],
    errorElement: <div>Some thing went wrong, page not found!</div>,
  },
];

const router = createBrowserRouter(routes);

export default router;