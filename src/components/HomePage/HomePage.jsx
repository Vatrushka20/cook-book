import './HomePage.scss';
import {LatestRecipes} from "../LatestRecipes/LatestRecipes";
import {PopularRecipe} from "../PopularRecipes/PopularRecipe";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Navigation} from "swiper";
import {SwiperSlide, Swiper} from "swiper/react";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {BsArrowDownCircle} from "react-icons/bs";
import {GiCook} from "react-icons/gi";
import {motion} from "framer-motion";

export const HomePage = () => {
    const [culinary, setCulinary] = useState([]);

    useEffect(() => {
        const getCulinary = async () => {
            const data = await axios.get('mock/culinarySection.json')
                .then(res => (res.data));
            setCulinary(data.culinary);
        };
        getCulinary();
    }, [])

    const handleClickScroll = () => {
        const element = document.getElementById('footer');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };
    const arrowScroll = () => {
        const element = document.getElementById('about-us');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };


    return (
        <motion.div className='home'
                    initial="initialState"
                    animate="animateState"
                    exit="exitState"
                    transition={{
                        duration: 0.75,
                    }}
                    variants={{
                        initialState: {
                            opacity: 0,
                        },
                        animateState: {
                            opacity: 1,
                        },
                    }}
                    // initial={{opacity: 0}}
                    // animate={{opacity: 1}}
                    // exit={{opacity: 0}}
        >
            <div className='banner'>
                <div className='banner__content wrapper'>
                    <h1 className='banner__content__title'>Unleash Your Inner Chef, Ignite Your Culinary
                        Journey!</h1>
                    <p className='banner__content__description'>Our website is here to guide and inspire you on your
                        culinary adventures, helping you create
                        unforgettable dishes and savor the joy of cooking.</p>
                    <button onClick={handleClickScroll} className='btn btn-banner'>Contact us</button>
                    <div className="scroll-down">
                        <BsArrowDownCircle onClick={arrowScroll} className='arrow' color='#BD5A42' fontSize='40px'/>
                    </div>
                </div>
            </div>
            <div id='about-us'></div>

            <div id='about-us' className='home__about-us wrapper'>
                <h2 className='title'>About us</h2>
                <p className='description'>Welcome to our cooking website, a dedicated platform created
                    to inspire and educate food enthusiasts of all levels. We are passionate about the art of
                    cooking
                    and firmly believe that it is an enriching experience that can bring joy and fulfillment to
                    people's
                    lives.
                </p>
                <p className='description'>
                    Our mission is to provide a comprehensive resource where visitors can explore a world of
                    flavors,
                    discover new recipes, learn essential cooking techniques, and gain confidence in the kitchen.
                    Whether you're a novice cook looking to learn the basics or a seasoned chef seeking fresh ideas,
                    our
                    website is designed to cater to your needs..</p>
                <div className='border'></div>
                <h2 className='home__about-us__footer'>Happy cooking!</h2>
            </div>
            <PopularRecipe/>

            <div className='facts-about-food'>
                <h2 className='title'>Chef's tips <GiCook/></h2>
                <Swiper className='swiper wrapper'
                        modules={[Navigation]}
                        spaceBetween={50}
                        loop={true}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{clickable: true}}
                >
                    {culinary.map(item => (
                        <SwiperSlide className='swiper-slide' key={item.id}>
                            <p className='description'>
                                {item.recommendation}
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <LatestRecipes/>
        </motion.div>
    )
}