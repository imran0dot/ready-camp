import React from 'react';
import {
    Drawer,
    Button,
} from "@material-tailwind/react";
import ProductFilterForm from '../forms/ProductFilterForm';

const ProductFilterCard: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    return (
        <>
            <div className='block md:hidden'>
                <Button variant='outlined' onClick={openDrawer}>Filter</Button>
                <Drawer open={open} onClose={closeDrawer} className="p-4">
                    <ProductFilterForm />
                </Drawer>
            </div>

            <div className='hidden md:block sticky top-24'>
                <ProductFilterForm />
            </div>
        </>
    );
};

export default ProductFilterCard;