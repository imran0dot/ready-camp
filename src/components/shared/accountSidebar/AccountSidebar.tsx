import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import Logo from "../../widgets/Logo";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/features/auth/authSlice";

export const AccountSidebar = () => {
    const dispatch = useDispatch();
    return (
        <Card className="sticky top-0 z-10 h-[100vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5" >
            <div className="mb-2 p-4 w-6/12">
                <Logo />
            </div>
            <List >
                <ListItem >
                    <ListItemPrefix >
                        <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Dashboard
                </ListItem>
                <ListItem >
                    <ListItemPrefix >
                        <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    E-Commerce
                </ListItem>
                <ListItem >
                    <ListItemPrefix >
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix >
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>
                <ListItem >
                    <ListItemPrefix >
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>
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