import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <div>Some thing went wrong, page not found!</div>,
  },
];

const router = createBrowserRouter(routes);

export default router;