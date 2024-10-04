import React from 'react';
import DashboardSceneWrapper from '../../../components/layout/DashboardSceneWrapper';
import { Typography } from '@material-tailwind/react';
import CategoryCreateForm from '../../../components/forms/CategoryCreateForm';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';


const TABLE_HEAD = ["Name", "Edit Category"];

const TABLE_ROWS = [
    {
        name: "John Michael"
    },
    {
        name: "Alexa Liras"
    },
    {
        name: "Laurent Perrier"
    },
    {
        name: "Michael Levi"
    },
    {
        name: "Richard Gran"
    }
];
const Category: React.FC = () => {
    return (
        <div className='grid grid-cols-2 gap-10'>
            <DashboardSceneWrapper>
                <Typography variant='h6' color='amber' className='mb-2'>Create Category</Typography>
                <CategoryCreateForm />
            </DashboardSceneWrapper>
            <DashboardSceneWrapper>
                <Typography variant='h6' color='blue-gray'>Category List</Typography>

                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ name }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className={`${classes} flex gap-6`}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium flex justify-center items-center gap-2"
                                        >
                                            <PencilIcon className='w-3' />
                                            Edit
                                        </Typography>

                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium flex justify-center items-center gap-2"
                                        >
                                            <TrashIcon className='w-3' />
                                            Delete
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </DashboardSceneWrapper>
        </div>
    );
};

export default Category;