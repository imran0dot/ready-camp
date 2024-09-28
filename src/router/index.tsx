import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Cart from "../pages/cart/Cart";
import Gadgets from "../pages/gadgets/Gadgets";
import Tools from "../pages/(accounts)/tools/Tools";
import ProtectedRoutes from "../components/layout/ProtectedRoutes";
import Account from "../pages/(accounts)/account/Account";
import { ArrowPathIcon, PresentationChartBarIcon } from "@heroicons/react/24/outline";
import OrderList from "../pages/(accounts)/orderList/OrderList";
import ProductsList from "../pages/(accounts)/products/ProductsList";
import SingleProduct from "../pages/(products)/singleProduct/SingleProduct";


interface ExtendedRouteObject {
  path: string;
  icon?: JSX.Element;
  element: JSX.Element;
}

export const adminRoutes: ExtendedRouteObject[] = [
  {
    path: "tools",
    icon: <PresentationChartBarIcon />,
    element: <Tools />
  },
  {
    path: "products",
    icon: <PresentationChartBarIcon />,
    element: <ProductsList />
  },
  {
    path: "order",
    icon: <ArrowPathIcon />,
    element: <OrderList />
  },
];


const navigationItems: RouteObject[] = [
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
]


const productRoutes: RouteObject[] = [
  {
    path: "product/:slug",
    element: <SingleProduct />
  },

]

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      ...navigationItems,
      ...productRoutes
    ]
  },
  {
    path: "/account",
    element: <ProtectedRoutes><Account /></ProtectedRoutes>,
    children: adminRoutes
  }
]

const router = createBrowserRouter(routes);

export default router;