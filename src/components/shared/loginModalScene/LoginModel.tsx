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
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
    email: string,
    password: string,
    rememberMe: boolean
}

const LoginModel: React.FC<{
    isShow: boolean,
    handleOpen: () => void,
    setLoginModal: (t: string) => void
}> = ({ isShow, handleOpen, setLoginModal }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        // console.log(data); // This should now work
        handleOpen(); // Close the dialog after submission if needed
    };

    return (
        <div>
            <Dialog
                size="sm"
                open={isShow}
                handler={handleOpen}
                className="bg-transparent shadow-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>

                <Card className="mx-auto w-full max-w-[24rem]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>

                    <CardBody className="flex flex-col gap-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>

                        <Typography variant="h4" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Sign In
                        </Typography>

                        <Typography className="mb-3 font-normal" variant="paragraph" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Enter your email and password to Sign In.
                        </Typography>

                        <Typography className="-mb-2" variant="h6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Your Email
                        </Typography>

                        <Input
                            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} label="Email"
                            size="lg"
                            {...register("email", { required: "Email is required" })}
                            error={!!errors.email} />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                        <Typography className="-mb-2" variant="h6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Your Password
                        </Typography>

                        <Input
                            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} label="Password"
                            type="password"
                            size="lg"
                            {...register("password", { required: "Password is required" })}
                            error={!!errors.password} />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                        <div className="-ml-2.5 -mt-3">
                            <Checkbox
                                onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} label="Remember Me"
                                {...register("rememberMe")} />
                        </div>
                    </CardBody>

                    <CardFooter className="pt-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Button
                            variant="filled"
                            className="bg-primary"
                            fullWidth
                            onClick={handleSubmit(onSubmit)}
                            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            Sign In
                        </Button>
                        <Typography variant="small" className="mt-4 flex justify-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Don&apos;t have an account?
                            <Typography
                                className="cursor-pointer ml-1 font-bold"
                                variant="small"
                                color="blue-gray"
                                onClick={() => setLoginModal('register')} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Sign up
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
    );
};

export default LoginModel;