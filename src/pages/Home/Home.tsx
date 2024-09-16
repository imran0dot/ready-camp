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

        </>
    );
};

export default Home;
