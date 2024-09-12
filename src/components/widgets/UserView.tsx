import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
} from "@material-tailwind/react";

export const UserView = () => {
    return (
        <Card
            className="w-96 shadow-none"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>

            <List
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                <ListItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <ListItemPrefix placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                    </ListItemPrefix>
                    <div>
                        <Typography variant="h6" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Tania Andrew
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Software Engineer @ Material Tailwind
                        </Typography>
                    </div>
                </ListItem>

            </List>
        </Card>
    );
}