import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Cart from "../pages/cart/Cart";
import Gadgets from "../pages/gadgets/Gadgets";
import Tools from "../pages/(accounts)/tools/Tools";
import ProtectedRoutes from "../components/layout/ProtectedRoutes";
import Account from "../pages/(accounts)/account/Account";
import { ArchiveBoxIcon, GiftIcon, PencilIcon, PresentationChartBarIcon } from "@heroicons/react/24/outline";
import ProductsList from "../pages/(accounts)/products/ProductsList";
import SingleProduct from "../pages/(products)/singleProduct/SingleProduct";
import Products from "../pages/(products)/products/Products";
import CreateProduct from "../pages/(accounts)/products/CreateProduct";

export interface ExtendedAdminRouteObject {
  path: string;
  name: string;
  icon?: JSX.Element;
  element: JSX.Element;
  children?: ExtendedAdminRouteObject[];
}

interface ExtendedNavObject {
  path: string;
  name?: string;
  element: JSX.Element;
}

export const adminRoutes: ExtendedAdminRouteObject[] = [
  {
    path: "dashboard",
    name: "Dashboard",
    icon: <PresentationChartBarIcon />,
    element: <></>
  },
  {
    path: "products",
    name: "Products",
    icon: <GiftIcon />,
    element: <ProductsList />,
    children: [
      {
        path: "",
        name: 'Products List',
        icon: <GiftIcon />,
        element: <ProductsList />,
      },
      {
        path: "create-product",
        name: 'Create Product',
        icon: <PencilIcon />,
        element: <CreateProduct />,
      },
      {
        path: "category",
        name: 'Category',
        icon: <ArchiveBoxIcon />,
        element: <ProductsList />,
      },
    ]
  },
  {
    path: "order",
    name: "Dashboard",
    icon: <PresentationChartBarIcon />,
    element: <></>
  }
];

const adminNestedRoutes = () => {
  const childrenRoutes: ExtendedAdminRouteObject[] = [];
  
  adminRoutes.forEach(element => {
    if (element.children) {
      childrenRoutes.push(...element.children); 
    }
  });

  return childrenRoutes;
};
const adminSubmenu = adminNestedRoutes();

export const navigationItems: ExtendedNavObject[] = [
  {
    path: "/",
    name: 'Home',
    element: <Home />
  },
  {
    path: "/shop",
    name: 'Shop',
    element: <Products />
  },
  {
    path: "/gadgets",
    name: 'Gadgets',
    element: <Gadgets />
  },
  {
    path: "/tools",
    name: 'Tools',
    element: <Tools />
  },
  {
    path: "/about",
    name: 'About',
    element: <About />
  },
];

export const systemRoutes: RouteObject[] = [
  {
    path: "/cart",
    element: <Cart />
  },
];

const productRoutes: RouteObject[] = [
  {
    path: "product/:slug",
    element: <SingleProduct />
  },
];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      ...navigationItems,
      ...productRoutes,
      ...systemRoutes,
      {
        path: "*",
        element: <h1>404 Not Found</h1>, 
      }
    ]
  },
  {
    path: "/account",
    element: <ProtectedRoutes><Account /></ProtectedRoutes>,
    children: [
      ...adminSubmenu
    ]
  },
];



const router = createBrowserRouter(routes);

export default router;