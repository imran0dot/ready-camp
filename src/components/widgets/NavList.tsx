import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { navigationItems } from "../../router";

const NavList = () => {
    const location = useLocation();
    return (
        <div
            className="
            text-center
            flex
            flex-col
            justify-center
            items-center
            mt-4 
            mb-6 
            p-0 
            lg:mt-0 
            lg:mb-0 
            lg:flex-row 
            lg:p-1">
            {
                navigationItems.map((menu, index) => <Link
                    to={menu.path as string}
                    className="
                    font-medium 
                    capitalize 
                    hover:bg-none 
                    text-blue-gray-800"
                    key={index}>
                    <div
                        className="flex justify-center items-center gap-2 py-2 px-2 mx-3 text-center">
                        <p>{menu.name}</p>
                    </div>
                    {menu.path === location.pathname && <div className="w-8/12 mx-auto -mt-1 border-t-2  border-primary"></div>}
                </Link>)
            }
        </div>

    );
};

export default NavList;

