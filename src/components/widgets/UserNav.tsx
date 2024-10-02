import { UserIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import {
    Typography,
    List,
    ListItem,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { switchModal } from "../../redux/features/loginModalSlice";
import { currentUser } from "../../redux/features/auth/authSlice";
import { totalCartItems } from "../../redux/features/addToCart/addToCart.slice";

interface TNavMenuItem {
    name: string;
    link: string;
    icon: JSX.Element;
}

const navMenuList: TNavMenuItem[] = [
    {
        name: 'cart',
        link: '/cart',
        icon: <ShoppingCartIcon />
    },
    {
        name: 'Account',
        link: '/account',
        icon: <UserIcon />
    }
];

const UserNav = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(currentUser);
    const cartItems = useAppSelector(totalCartItems);
    return (
        <List
            className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 flex-row justify-end lg:p-1"


        >
            {
                navMenuList.map((menu, index) => {
                    if (menu.name === 'Account') {
                        if (user) {
                            return <Link
                                to={menu.link}
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
                                {menu.link === location.pathname && <div className="w-8/12 mx-auto -mt-1 border-t-2  border-primary"></div>}
                            </Link>
                        }
                        return <Button
                            key={index}
                            variant="text"
                            onClick={() => dispatch(switchModal())}
                            color="blue-gray"
                            className="font-medium capitalize p-0"


                        >
                            <ListItem
                                className="flex items-center py-2"


                            >
                                <span className="w-5 mr-3">{menu.icon}</span>
                                <Typography
                                    className="hidden md:block"


                                >{menu.name}</Typography>
                            </ListItem>

                        </Button>
                    }

                    return <Link
                        key={index}
                        to={menu.link}
                        color="blue-gray"
                        className="font-medium capitalize"
                    >
                        <ListItem
                            className="flex items-center py-2"
                        >
                            {cartItems && cartItems > 0 ?
                                <sup className="">
                                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full">{cartItems}</span>
                                </sup> : ""
                            }
                            <span className="w-5 mr-3">{menu.icon} </span>
                            <Typography
                                className="hidden md:block"
                            >{menu.name}</Typography>
                        </ListItem>

                    </Link>
                })
            }


        </List>
    );
};

export default UserNav;

