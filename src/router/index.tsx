import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Cart from "../pages/cart/Cart";
import Gadgets from "../pages/gadgets/Gadgets";
import Tools from "../pages/tools/Tools";
import Account from "../pages/account/Account";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/gadgets",
        element: <Gadgets />
      },
      {
        path: "/tools",
        element: <Tools />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/account",
        element: <Account />,
        children: [
          {
            path: "tools",
            element: <Tools />
          },
        ]
      }
    ],
    errorElement: <div>Some thing went wrong, page not found!</div>,
  },
];

const router = createBrowserRouter(routes);

export default router;