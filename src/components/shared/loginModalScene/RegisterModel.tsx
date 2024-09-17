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

import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
    name: string,
    email: string,
    password: string,
    rememberMe: boolean
}


const RegisterModel: React.FC<{
    isShow: boolean,
    handleOpen: () => void,
    setLoginModal: (t: string) => void
}> = ({ isShow, handleOpen, setLoginModal }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {

        // TODO Send data to backend
        fetch(`${import.meta.env.VITE_API_URL}user`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                username: data.name
            })
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        console.log(data);
        handleOpen();
    };

    return (
        <div>
            <Dialog
                size="xs"
                open={isShow}
                handler={handleOpen}
                className="bg-transparent shadow-none"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>

                <Card className="mx-auto w-full max-w-[24rem]"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>

                    <CardBody className="flex flex-col gap-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>

                        <Typography variant="h4" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Sign Up
                        </Typography>

                        <Typography className="mb-3 font-normal" variant="paragraph" color="gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Enter your email and password to Sign Up.
                        </Typography>

                        <Typography className="-mb-2" variant="h6"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Your Name
                        </Typography>

                        <Input
                            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} label="name"
                            required
                            size="lg"
                            {...register("name", { required: "name is required" })}
                            error={!!errors.name}      
                                              />
                        {errors.email && <span className="text-red-500">{errors.email.message as string}</span>}

                        <Typography className="-mb-2" variant="h6"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Your Email
                        </Typography>

                        <Input
                            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}
                            required label="Email"
                            size="lg"
                            {...register("email", { required: "Email is required" })}
                            error={!!errors.email}      
                                              />
                        {errors.email && <span className="text-red-500">{errors.email.message as string}</span>}

                        <Typography className="-mb-2" variant="h6"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Your Password
                        </Typography>

                        <Input
                            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} label="Password"
                            size="lg"
                            required
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            error={!!errors.password}                        />
                        {errors.password && <span className="text-red-500">{errors.password.message as string}</span>}

                        <div className="-ml-2.5 -mt-3">
                            <Checkbox onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} label="Remember Me" {...register("rememberMe")} />
                        </div>
                    </CardBody>

                    <CardFooter className="pt-0"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Button
                            variant="filled"
                            className="bg-primary"
                            onClick={handleSubmit(onSubmit)}
                            fullWidth  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Sign Up
                        </Button>
                        <Typography variant="small" className="mt-4 flex justify-center"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Do you have an account?

                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="cursor-pointer ml-1 font-bold"
                                onClick={() => setLoginModal('login')}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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