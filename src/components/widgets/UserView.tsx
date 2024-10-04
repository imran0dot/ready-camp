import {
    List,
    ListItem,
    ListItemPrefix,
    Card,
    Typography,
} from "@material-tailwind/react";
import { currentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../hooks/reduxHooks";

export const UserView = () => {
    const user = useAppSelector(currentUser) as { username: string, email: string };
    console.log(user);
    return (
        <Card
            className="w-full border shadow-none rounded-none"

        >
            <List>
                <ListItem   >
                    <ListItemPrefix   >
                        <div className="h-10 w-10 flex items-center justify-center text-2xl text-center bg-blue-gray-200 capitalize rounded-full">
                            {(user?.username as string).split("")[0]}
                        </div>
                    </ListItemPrefix>
                    <div>
                        <Typography variant="h6" color="blue-gray"   >
                            {user?.username}
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal"   >
                            {user?.email}
                        </Typography>
                    </div>
                </ListItem>

            </List>
        </Card>
    );
}