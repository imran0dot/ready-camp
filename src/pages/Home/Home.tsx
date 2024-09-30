import React from 'react';
import banner2 from '../../assets/banner-hero.jpg';
import CategoryBox from '../../components/widgets/CategoryBox';
import Wrapper from '../../components/shared/wrapper/Wrapper';
import campingImage from "../../assets/camping-category-img.webp";
import womanImage from "../../assets/woman-category-img.webp";
import manImage from "../../assets/man-category-img.webp";
import footwearImage from "../../assets/Foot-wear-category-img.webp";
import warehouseImage from "../../assets/warehouse-clearance.webp"
import backToSchoolImage from "../../assets/backtoschool.webp"
import PeterStromImage from "../../assets/peter-strom.webp"
import halfPriceImage from "../../assets/half-price.webp"
import ProductCard from '../../components/widgets/ProductCard';
import ContactForm from '../../components/forms/ContactForm';
import { Typography } from '@material-tailwind/react';


type TCategory = {
    img: string,
    name: string,
    link: string
}

const categoryList: TCategory[] = [
    {
        img: campingImage,
        name: "Camping",
        link: "#"
    }, {
        img: womanImage,
        name: "Camping",
        link: "#"
    }, {
        img: manImage,
        name: "Camping",
        link: "#"
    }, {
        img: footwearImage,
        name: "Camping",
        link: "#"
    }
]

const popularShoppingList: TCategory[] = [
    {
        img: warehouseImage,
        name: "Camping",
        link: "#"
    }, {
        img: backToSchoolImage,
        name: "Camping",
        link: "#"
    }, {
        img: halfPriceImage,
        name: "Camping",
        link: "#"
    }, {
        img: PeterStromImage,
        name: "Camping",
        link: "#"
    }
]

const Home: React.FC = () => {
    return (
        <>
            {/* hero section  */}
            <section
                style={{
                    backgroundImage: `url(${banner2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className='
                    w-full 
                    h-[300px]
                    md:h-[400px] 
                    overflow-hidden 
                    flex 
                    flex-col 
                    justify-center 
                    items-center
                    text-white'
            >

            </section>

            {/* category section */}
            <section>
                <Wrapper>
                    <div
                        className='
                            grid
                            grid-cols-2
                            md:grid-cols-4
                            gap-5
                            m-5'>
                        {
                            categoryList.map((category, index) => <CategoryBox
                                key={index}
                                link={category.link}
                                img={category.img}
                            />)
                        }
                    </div>
                </Wrapper>
            </section>

            {/* Featured Products  */}
            <section>
                <Wrapper>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </Wrapper>
            </section>

            {/* popular shopping  */}
            <section>
                <Wrapper>
                    <div
                        className='
                            grid
                            grid-cols-2
                            md:grid-cols-2
                            gap-5
                            m-5
                        '
                    >
                        {
                            popularShoppingList?.map((popularShopping, index) => <CategoryBox
                                key={index}
                                link={popularShopping.link}
                                img={popularShopping.img}
                            />)
                        }
                    </div>
                </Wrapper>
            </section>


            {/* Contact us section  */}
            <section>
                <Wrapper>
                    <section className="px-8 py-8 lg:py-16">
                        <div className="container mx-auto text-center">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="mb-4 !text-base lg:!text-2xl"
                            >
                                Customer Care
                            </Typography>
                            <Typography
                                variant="h1"
                                color="blue-gray"
                                className="mb-4 !text-3xl lg:!text-5xl"
                            >
                                We&apos;re Here to Help
                            </Typography>
                            <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
                                Whether it&apos;s a question about our services, a request for
                                technical assistance, or suggestions for improvement, our team is
                                eager to hear from you.
                            </Typography>
                            <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.367032992344!2d90.35574967432673!3d23.76994098802785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c19704f97af7%3A0xab7638e90fa88e4c!2sUmmah%20Point!5e0!3m2!1sen!2sbd!4v1727725472599!5m2!1sen!2sbd" width="600" height="450" loading="lazy"></iframe>

                                <ContactForm />
                            </div>
                        </div>
                    </section>
                </Wrapper>
            </section>

        </>
    );
};

export default Home;



