import React from 'react';
import Wrapper from '../wrapper/Wrapper';
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    email: string
}

const PreFooter: React.FC = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <div className='bg-secondary'>
            <Wrapper>
                <div
                    className='
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        justify-center
                        items-center
                        m-5
                        p-5
                        md:p-10
                        gap-5
                        md:gap-20'>
                    <div>
                        <h2
                            className='
                            text-2xl
                            text-green'
                        >Sign up for great offers & exclusive content</h2>
                    </div>


                    <div>
                        <form
                            className='
                                flex
                                mb-2'
                            onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className='
                                    border
                                    p-2
                                    outline-none
                                    w-full'
                                placeholder='Enter your Email Address'
                                {...register("email", { required: true })} />
                            <input
                                className='
                                    bg-primary
                                    text-white 
                                    px-10 
                                    py-2 
                                    rounded-sm
                                    cursor-pointer'
                                type="submit" />
                        </form>

                        {errors.email && <small className='text-red-500 block'>This field is required</small>}
                        <small
                            className='
                        text-[10px]
                        leading-[2px]
                        '>Sign up here to receive marketing communications from the Blacks Outdoor Group. We will use your information in accordance with our Privacy Policy - updated from February 2024
                        </small>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default PreFooter;