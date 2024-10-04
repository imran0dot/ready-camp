import React from 'react';
import DashboardSceneWrapper from '../../../components/layout/DashboardSceneWrapper';
import { Typography } from '@material-tailwind/react';
import CategoryCreateForm from '../../../components/forms/CategoryCreateForm';

const Category: React.FC = () => {
    return (
        <div className='grid grid-cols-2 gap-10'>
            <DashboardSceneWrapper>
                <Typography variant='h6' color='amber' className='mb-2'>Create Category</Typography>
                <CategoryCreateForm />
            </DashboardSceneWrapper>
            <DashboardSceneWrapper>
            <Typography variant='h6' color='blue-gray'>Category List</Typography>
            </DashboardSceneWrapper>
        </div>
    );
};

export default Category;