import React from 'react';
import banner from '../../hero-banner.webp';
import MainFilter from '../../../components/widgets/MainFilter';

const Home: React.FC = () => {
    return (
        <>
            {/* hero section  */}
            <div
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className='w-full h-[400px] overflow-hidden flex flex-col justify-center items-center'
            >
                <div className='bg-white backdrop-blur-sm w-4/6 p-10 bg-opacity-90 flex flex-col gap-3'>
                    <h2 className='text-1xl font-bold'>What are you looking for ?</h2>
                    <MainFilter />
                </div>
            </div>

        </>
    );
};

export default Home;
