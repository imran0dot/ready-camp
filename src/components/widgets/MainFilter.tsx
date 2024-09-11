import { Button, Input } from '@material-tailwind/react';
import { useForm, SubmitHandler } from "react-hook-form"
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
type Inputs = {
    example: string
    exampleRequired: string
}

const MainFilter: React.FC = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);


    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col md:flex-row gap-3">
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <Input
                        {...register("exampleRequired", { required: true })}
                        label="Username"
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        crossOrigin={undefined} />

                    <Input
                        {...register("exampleRequired", { required: true })}
                        label="item"
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        crossOrigin={undefined} />
                </div>

                <Button
                    type='submit'
                    className='flex items-center gap-3 bg-indigo-600'
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    placeholder={undefined}>
                        Search
                    <MagnifyingGlassIcon className='inline w-[30px] ml-2' />
                </Button>

            </form>
        </div>
    );
};

export default MainFilter;