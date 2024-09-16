import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";

const RegisterModel: React.FC<{
    isShow: boolean,
    handleOpen: () => void,
    setLoginModal: (t: string) => void
}> = ({ isShow, handleOpen, setLoginModal }) => {

    return (
        <div>
            <Dialog
                size="xs"
                open={isShow}
                handler={handleOpen}
                className="bg-transparent shadow-none"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined} >

                <Card className="mx-auto w-full max-w-[24rem]"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}>

                    <CardBody
                        className="flex flex-col gap-4"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>

                        <Typography
                            variant="h4"
                            color="blue-gray"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            Sign Up
                        </Typography>

                        <Typography
                            className="mb-3 font-normal"
                            variant="paragraph"
                            color="gray"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined} >
                            Enter your email and password to Sign Up.
                        </Typography>

                        <Typography
                            className="-mb-2"
                            variant="h6"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            Your Email
                        </Typography>

                        <Input
                            label="Email"
                            size="lg"
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                            crossOrigin={undefined} />
                        <Typography
                            className="-mb-2"
                            variant="h6"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            Your Password
                        </Typography>

                        <Input
                            label="Password"
                            size="lg"
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                            crossOrigin={undefined} />
                        <div
                            className="-ml-2.5 -mt-3">

                            <Checkbox
                                label="Remember Me"
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                                crossOrigin={undefined} />
                        </div>
                    </CardBody>
                    <CardFooter
                        className="pt-0"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                        <Button
                            variant="filled"
                            className="bg-primary"
                            onClick={handleOpen}
                            fullWidth placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            Sign In
                        </Button>
                        <Typography
                            variant="small"
                            className="mt-4 
                        flex justify-center"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            Do have an account?

                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue-gray"
                                className="ml-1 font-bold"
                                onClick={() => setLoginModal('login')} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                                Sign in
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
    );
};

export default RegisterModel;