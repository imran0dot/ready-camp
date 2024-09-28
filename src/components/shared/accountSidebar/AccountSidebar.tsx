import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Card,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    Cog6ToothIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import Logo from "../../widgets/Logo";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/features/auth/authSlice";
import { adminRoutes } from "../../../router";
import { Link, Route } from "react-router-dom";
import { useState } from "react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

export const AccountSidebar = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(1);
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    return (
        <Card className="sticky top-0 z-10 h-[100vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5" >
            <div className="mb-2 p-4 w-6/12">
                <Logo />
            </div>
            <List >
                {
                    adminRoutes.map((route, index) => {
                        if (route?.subMenu) {
                            return <Accordion className="capitalize" open={open === 1}   >
                                <ListItem className="text-xl flex justify-between" onClick={() => handleOpen(1)}>

                                    <div className="flex">
                                        <ListItemPrefix >
                                            <span className="h-5 w-5">{route.icon}</span>
                                        </ListItemPrefix>
                                        <span className="text-sm">
                                            {route.path}
                                        </span>
                                    </div>

                                    <ArrowDownCircleIcon className="w-5" />
                                </ListItem>
                                <AccordionBody>
                                    {route?.subMenu.map((subMenu, index) => <Link key={index} to={subMenu.path}>
                                        <ListItem  className="pl-9">
                                            <ListItemPrefix >
                                                <span className="h-5 w-5">{subMenu.icon}</span>
                                            </ListItemPrefix>
                                            {subMenu?.name}
                                        </ListItem></Link>)
                                    }
                                </AccordionBody>
                            </Accordion>
                        }

                        return (<Link key={index} to={route.path}>
                            <ListItem >
                                <ListItemPrefix >
                                    <span className="h-5 w-5">{route.icon}</span>
                                </ListItemPrefix>
                                {route?.path}
                            </ListItem></Link>)
                    })
                }


                <ListItem >
                    <ListItemPrefix >
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem
                    onClick={() => dispatch(logOut())}
                >
                    <ListItemPrefix >
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
    );
}