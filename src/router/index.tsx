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
import Products from "../pages/(products)/products/Products";


interface ExtendedRouteObject {
  path: string;
  icon?: JSX.Element;
  element: JSX.Element;
}


interface ExtendedNavObject {
  path: string;
  name?: string;
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


export const navigationItems: ExtendedNavObject[] = [
  {
    path: "/",
    name: 'home',
    element: <Home />
  },
  {
    path: "/shop",
    name: 'shop',
    element: <Products />
  },
  {
    path: "/gadgets",
    name: 'gadgets',
    element: <Gadgets />
  },
  {
    path: "/tools",
    name: 'tools',
    element: <Tools />
  },
  {
    path: "/about",
    name: 'about',
    element: <About />
  }
];


export const systemRoutes: RouteObject[]  = [
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
      ...productRoutes,
      ...systemRoutes
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