import { UserIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import {
    Typography,
    List,
    ListItem,
} from "@material-tailwind/react";

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
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {
                navMenuList.map((menu, index) => <Typography
                    key={index}
                    as="a"
                    href={menu.link}
                    variant="paragraph"
                    color="blue-gray"
                    className="font-medium capitalize font-b"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                >
                    <ListItem
                        className="flex items-center py-2"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                        <span className="w-5 mr-3">{menu.icon}</span>
                        <Typography
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined} >{menu.name}</Typography>
                    </ListItem>

                </Typography>)
            }
        </List>
    );
};

export default UserNav;

