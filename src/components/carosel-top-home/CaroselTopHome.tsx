import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import './CaroselTopHome.scss';

const CaroselTopHome = () =>{
    const [windowDimensions, setWindowDimensions] = useState(
        window.innerWidth
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    return(
        <div id="carosel-top-home">
            <Swiper
                className="swiper-top-home"
                modules={[Navigation, Scrollbar]}
                spaceBetween={30}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper:any) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                loop={true}
                slidesPerView={
                    windowDimensions > 1200 
                    ? 3 
                    : windowDimensions > 768 
                    ? 2
                    : 1
                }
                speed={1200}
            >
                <SwiperSlide>
                    <div className="silde">
                        <img src="/images/img-slide-top-home.png" alt="img-carosel-home" />
                        <span className="slide-title">Lorem ipsum dolor sit amet <br/>consec adipis elit</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="silde">
                        <img src="/images/img-slide-top-home.png" alt="img-carosel-home" />
                        <span className="slide-title">Lorem ipsum dolor sit amet <br/>consec adipis elit</span>
                    </div>
                </SwiperSlide> 
                <SwiperSlide>
                    <div className="silde">
                        <img src="/images/img-slide-top-home.png" alt="img-carosel-home" />
                        <span className="slide-title">Lorem ipsum dolor sit amet <br/>consec adipis elit</span>
                    </div>
                </SwiperSlide> 
                <SwiperSlide>
                    <div className="silde">
                        <img src="/images/img-slide-top-home.png" alt="img-carosel-home" />
                        <span className="slide-title">Lorem ipsum dolor sit amet <br/>consec adipis elit</span>
                    </div>
                </SwiperSlide> 
                <SwiperSlide>
                    <div className="silde">
                        <img src="/images/img-slide-top-home.png" alt="img-carosel-home" />
                        <span className="slide-title">Lorem ipsum dolor sit amet <br/>consec adipis elit</span>
                    </div>
                </SwiperSlide>
                <div className="pre arrow" ref={navigationPrevRef}><ChevronLeft/></div>
                <div className="next arrow" ref={navigationNextRef} ><ChevronRight/></div>
            </Swiper>
        </div>
    )
}


export default CaroselTopHome;