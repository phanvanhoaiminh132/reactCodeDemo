import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import "./CaroselTemplate.scss";

const CaroselTemplate = () =>{
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
        <div className="carosel-template">
            <div className="category-carosel">
                <span className="title">Business</span>
            </div>

        
            <Swiper
                className="swiper-template"
                modules={[Navigation, Scrollbar]}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper:any) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                spaceBetween={30}
                loop={true}
                slidesPerView={
                    windowDimensions > 1199 
                    ? 2
                    : 1
                }
                speed={1200}
            >
                <SwiperSlide>
                    <div className="slide">
                        <img src="/images/img-carosel-template.jpg" alt="carosel-img-template"/>
                        <p className="time-title"><span className="red">Technology</span> / January 01, 2045</p>
                        <p className="slide-title">Sanctus amet sed amet ipsum lorem</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <img src="/images/img-carosel-template.jpg" alt="carosel-img-template"/>
                        <p className="time-title"><span className="red">Technology</span> / January 01, 2045</p>
                        <p className="slide-title">Sanctus amet sed amet ipsum lorem</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <img src="/images/img-carosel-template.jpg" alt="carosel-img-template"/>
                        <p className="time-title"><span className="red">Technology</span> / January 01, 2045</p>
                        <p className="slide-title">Sanctus amet sed amet ipsum lorem</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <img src="/images/img-carosel-template.jpg" alt="carosel-img-template"/>
                        <p className="time-title"><span className="red">Technology</span> / January 01, 2045</p>
                        <p className="slide-title">Sanctus amet sed amet ipsum lorem</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <img src="/images/img-carosel-template.jpg" alt="carosel-img-template"/>
                        <p className="time-title"><span className="red">Technology</span> / January 01, 2045</p>
                        <p className="slide-title">Sanctus amet sed amet ipsum lorem</p>
                    </div>
                </SwiperSlide>
                <div className="pre arrow" ref={navigationPrevRef}><ChevronLeft/></div>
                <div className="next arrow" ref={navigationNextRef} ><ChevronRight/></div>
            </Swiper>
        </div>
    )
}

export default CaroselTemplate;