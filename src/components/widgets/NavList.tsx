import {
    Typography,
    List,
    ListItem
} from "@material-tailwind/react";

const navMenuList: { name: string, link: string }[] = [
    {
        name: 'home',
        link: '/'
    },
    {
        name: 'Backpacking Gear',
        link: '/'
    },
    {
        name: 'Gadgets',
        link: '/'
    },
    {
        name: 'Cooking Equipment',
        link: '/'
    },
    {
        name: 'Tools',
        link: '/'
    },
    {
        name: 'about us',
        link: '/about-us'
    }
];

const NavList = () => {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {
                navMenuList.map((menu, index) => <Typography
                    key={index}
                    as="a"
                    href="#"
                    variant="paragraph"
                    color="blue-gray"
                    className="font-medium capitalize font-b" 
                    placeholder={undefined} 
                    onPointerEnterCapture={undefined} 
                    onPointerLeaveCapture={undefined}      >
                    <ListItem className="flex items-center gap-2 py-2 pr-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{menu.name}</ListItem>
                </Typography>)
            }
        </List>
    );
};

export default NavList;

