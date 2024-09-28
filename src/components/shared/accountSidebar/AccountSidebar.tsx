import {
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
import { Link } from "react-router-dom";

export const AccountSidebar = () => {
    const dispatch = useDispatch();
    return (
        <Card className="sticky top-0 z-10 h-[100vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5" >
            <div className="mb-2 p-4 w-6/12">
                <Logo />
            </div>
            <List >
                {
                    adminRoutes.map((route, index) => <Link to={route.path}>
                        <ListItem key={index} >
                            <ListItemPrefix >
                                <span className="h-5 w-5">{route.icon}</span>
                            </ListItemPrefix>
                            {route?.path}
                        </ListItem></Link>)
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