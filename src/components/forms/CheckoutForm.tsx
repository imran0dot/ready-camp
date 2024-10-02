import { Button, Input, Typography } from '@material-tailwind/react';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ICheckOut {
    name: string;
    email: string;
    phone: string;
    district: string;
    division: string;
    homeAddress: string;
    postCode: string | number;
}

const CheckoutForm: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ICheckOut>();
    const checkoutHandler: SubmitHandler<ICheckOut> = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(checkoutHandler)}>
            <div  className="flex flex-col gap-7 mt-7">
                {/* Name Filed  */}
                <div>
                    <Typography
                        variant="paragraph"
                        className="text-left font-medium !text-gray-600"
                    >
                        Name
                    </Typography>
                    <Input
                        color="gray"
                        size="lg"
                        placeholder="Your Name"
                        {...register("name", { required: "Name name is required" })}
                        containerProps={{
                            className: "min-w-full",
                        }}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                {/* Email  */}
                <div>
                    <Typography
                        variant="paragraph"
                        className="text-left font-medium !text-gray-600"
                    >
                        Email
                    </Typography>
                    <Input
                        color="gray"
                        size="lg"
                        placeholder="Enter Your Email"
                        {...register("email", { required: "Email is required" })}
                        containerProps={{
                            className: "min-w-full",
                        }}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                {/* Phone  */}
                <div>
                    <Typography
                        variant="paragraph"
                        className="text-left font-medium !text-gray-600"
                    >
                        Phone
                    </Typography>

                    <Input
                        color="gray"
                        size="lg"
                        type='tel'
                        placeholder="Enter Your Phone Number"
                        {...register("phone", { required: "Phone Number is required" })}
                        containerProps={{
                            className: "min-w-full",
                        }}
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                </div>
                {/* District and division  */}
                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        <Typography
                            variant="paragraph"
                            className="text-left font-medium !text-gray-600"
                        >
                            Jela
                        </Typography>
                        <Input
                            color="gray"
                            size="md"
                            placeholder="Enter your Jela Name"
                            {...register("district", { required: "Jela Address Must Have to Provide" })}
                            containerProps={{
                                className: "min-w-full",
                            }}
                        />
                        {errors.district && <p className="text-red-500">{errors.district.message}</p>}
                    </div>

                    <div>
                        <Typography
                            variant="paragraph"
                            className="text-left font-medium !text-gray-600"
                        >
                            Thana
                        </Typography>
                        <Input
                            color="gray"
                            size="md"
                            placeholder="Enter your thana name"
                            {...register("division", { required: "Thana Must Have to Provide" })}
                            containerProps={{
                                className: "min-w-full",
                            }}
                        />
                        {errors.division && <p className="text-red-500">{errors.division.message}</p>}
                    </div>
                </div>


                <div>
                    <Typography
                        variant="paragraph"
                        className="text-left font-medium !text-gray-600"
                    >
                        Receive Address
                    </Typography>
                    <Input
                        color="gray"
                        size="md"
                        placeholder="Enter your Receive Address"
                        {...register("homeAddress", { required: "Please Enter your Receive Address" })}
                        containerProps={{
                            className: "min-w-full",
                        }}
                    />
                    {errors.district && <p className="text-red-500">{errors.district.message}</p>}
                </div>


            </div>

            <div>
                {/* Total  */}
                <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Subtotal</p>
                        <p className="font-semibold text-gray-900">$399.00</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Shipping</p>
                        <p className="font-semibold text-gray-900">$8.00</p>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-gray-900">$408.00</p>
                </div>
            </div>

            <Button className="w-full capitalize text-md font-medium mt-10" color="blue" type="submit">
                Confirm Order
            </Button>
        </form>
    );
};

export default CheckoutForm;