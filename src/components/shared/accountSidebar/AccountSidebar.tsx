import {
    Accordion,
    AccordionBody,
    Card,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Cog6ToothIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import Logo from "../../widgets/Logo";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/features/auth/authSlice";
import { adminRoutes } from "../../../router";
import { Link } from "react-router-dom";
import { useState } from "react";

export const AccountSidebar = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(0);
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    return (
        <Card className="sticky top-0 z-10 w-full max-w-[17rem] max-h-[100vh]  min-h-[100vh] p-4" >
            <div className="mb-2 p-4 w-6/12">
                <Logo />
            </div>

            <List style={{ height: '100%' }}>
                <div className="flex flex-col justify-between w-full h-full ">
                    <div>
                        {
                            adminRoutes.map((route, index) => {
                                if (route?.children) {
                                    return (
                                        <Accordion className="capitalize" open={open === index + 1}>

                                            <ListItem className="text-xl flex justify-between" onClick={() => handleOpen(index + 1)}>
                                                <div className="flex ">
                                                    <ListItemPrefix >
                                                        <span className="h-5 w-5">{route.icon}</span>
                                                    </ListItemPrefix>
                                                    <span className="text-sm">
                                                        {route.name}
                                                    </span>
                                                </div>
                                                <ChevronDownIcon className={`w-5 transition-all ${open === index + 1 && 'rotate-180'}`} />
                                            </ListItem>

                                            <AccordionBody >
                                                <div>
                                                    {route?.children.map((subMenu, index) => <Link key={index} to={subMenu.path}>
                                                        <ListItem className="pl-9">
                                                            <ListItemPrefix >
                                                                <span className="h-5 w-5">{subMenu.icon}</span>
                                                            </ListItemPrefix>
                                                            {subMenu?.name}
                                                        </ListItem></Link>)
                                                    }
                                                </div>
                                            </AccordionBody>
                                        </Accordion>)
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

                    </div>

                    <div>
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
                    </div>
                </div>
            </List>
        </Card>
    );
}