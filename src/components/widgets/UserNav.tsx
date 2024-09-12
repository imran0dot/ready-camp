import { UserIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import {
    Typography,
    List,
    ListItem,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { switchModal } from "../../redux/features/loginSlice";

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
        link: '/',
        icon: <UserIcon />
    }
];

const UserNav = () => {
    const dispatch = useAppDispatch();
    return (
        <List
            className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 flex-row justify-end lg:p-1"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            {
                navMenuList.map((menu, index) => {
                    if (menu.name === 'Account') {
                      return  <Button
                            key={index}
                            variant="text"
                            onClick={() => dispatch(switchModal())}
                            color="blue-gray"
                            className="font-medium capitalize p-0"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}                        >
                            <ListItem
                                className="flex items-center py-2"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}>
                                <span className="w-5 mr-3">{menu.icon}</span>
                                <Typography
                                    className="hidden md:block"
                                    placeholder={undefined}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined} >{menu.name}</Typography>
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
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            <span className="w-5 mr-3">{menu.icon}</span>
                            <Typography
                                className="hidden md:block"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined} >{menu.name}</Typography>
                        </ListItem>

                    </Link>
                })
            }


        </List>
    );
};

export default UserNav;

