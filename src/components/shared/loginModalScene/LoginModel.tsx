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
        console.log(data); 
        handleOpen();
    }

    return (
        <div>
            <Dialog
                size="sm"
                open={isShow}
                handler={handleOpen}
                className="bg-transparent shadow-none"   >

                <Card className="mx-auto w-full max-w-[24rem]"   >

                    <CardBody className="flex flex-col gap-4"   >

                        <Typography variant="h4" color="blue-gray"   >
                            Sign In
                        </Typography>

                        <Typography className="mb-3 font-normal" variant="paragraph" color="gray"   >
                            Enter your email and password to Sign In.
                        </Typography>

                        <Typography className="-mb-2" variant="h6"   >
                            Your Email
                        </Typography>

                        <Input
                              crossOrigin={undefined} label="Email"
                            size="lg"
                            {...register("email", { required: "Email is required" })}
                            error={!!errors.email} />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                        <Typography className="-mb-2" variant="h6"   >
                            Your Password
                        </Typography>

                        <Input
                              crossOrigin={undefined} label="Password"
                            type="password"
                            size="lg"
                            {...register("password", { required: "Password is required" })}
                            error={!!errors.password} />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                        <div className="-ml-2.5 -mt-3">
                            <Checkbox
                                  crossOrigin={undefined} label="Remember Me"
                                {...register("rememberMe")} />
                        </div>
                    </CardBody>

                    <CardFooter className="pt-0"   >
                        <Button
                            variant="filled"
                            className="bg-primary"
                            fullWidth
                            onClick={handleSubmit(onSubmit)}
                                                      >
                            Sign In
                        </Button>
                        <Typography variant="small" className="mt-4 flex justify-center"   >
                            Don&apos;t have an account?
                            <Typography
                                className="cursor-pointer ml-1 font-bold"
                                variant="small"
                                color="blue-gray"
                                onClick={() => setLoginModal('register')}   >
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