import React from 'react';
import banner2 from '../../assets/banner-hero.jpg';
import CategoryBox from '../../components/widgets/CategoryBox';
import Wrapper from '../../components/shared/wrapper/Wrapper';
import campingImage from "../../assets/camping-category-img.webp"
import womanImage from "../../assets/woman-category-img.webp"
import manImage from "../../assets/man-category-img.webp"
import footwearImage from "../../assets/Foot-wear-category-img.webp"

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
                    h-[400px] 
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
                            categoryList.map(category => <CategoryBox
                                key={category.name}
                                name={category.name}
                                img={category.img}
                            />)
                        }
                    </div>
                </Wrapper>
            </section>

        </>
    );
};

export default Home;
