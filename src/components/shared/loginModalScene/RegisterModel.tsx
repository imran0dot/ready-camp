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
import { useRegisterMutation } from "../../../redux/features/auth/authApi";

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
    const [registerHandler, {data, error: registerError}] = useRegisterMutation();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
            username: data.name
        }
        registerHandler(userInfo)
        handleOpen();
    };

    console.log(`data => ${data}`)
    console.log(`registerError => ${registerError}`)
    return (
        <div>
            <Dialog
                size="xs"
                open={isShow}
                handler={handleOpen}
                className="bg-transparent shadow-none" >

                <Card className="mx-auto w-full max-w-[24rem]" >

                    <CardBody className="flex flex-col gap-4" >

                        <Typography variant="h4" color="blue-gray"  >
                            Sign Up
                        </Typography>

                        <Typography className="mb-3 font-normal" variant="paragraph" color="gray"  >
                            Enter your email and password to Sign Up.
                        </Typography>

                        <Typography className="-mb-2" variant="h6"  >
                            Your Name
                        </Typography>

                        <Input
                               label="name"
                            required
                            size="lg"
                            {...register("name", { required: "name is required" })}
                            error={!!errors.name}      
                                              />
                        {errors.email && <span className="text-red-500">{errors.email.message as string}</span>}

                        <Typography className="-mb-2" variant="h6"  >
                            Your Email
                        </Typography>

                        <Input
                            required label="Email"
                            size="lg"
                            {...register("email", { required: "Email is required" })}
                            error={!!errors.email}      
                                              />
                        {errors.email && <span className="text-red-500">{errors.email.message as string}</span>}

                        <Typography className="-mb-2" variant="h6"  >
                            Your Password
                        </Typography>

                        <Input
                            label="Password"
                            size="lg"
                            required
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            error={!!errors.password}                        />
                        {errors.password && <span className="text-red-500">{errors.password.message as string}</span>}

                        <div className="-ml-2.5 -mt-3">
                            <Checkbox  label="Remember Me" {...register("rememberMe")} />
                        </div>
                    </CardBody>

                    <CardFooter className="pt-0"  >
                        <Button
                            variant="filled"
                            className="bg-primary"
                            onClick={handleSubmit(onSubmit)}
                            fullWidth  >
                            Sign Up
                        </Button>
                        <Typography variant="small" className="mt-4 flex justify-center"  >
                            Do you have an account?

                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="cursor-pointer ml-1 font-bold"
                                onClick={() => setLoginModal('login')}  >
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