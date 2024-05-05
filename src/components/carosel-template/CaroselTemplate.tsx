import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { articlesType, propsValueSlider } from "../../types/Types";
import "./CaroselTemplate.scss";
import moment from "moment";

const CaroselTemplate = ({dataValue,title}:propsValueSlider) =>{
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
                <span className="title">{title}</span>
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

                {
                    dataValue.map((item:articlesType, index:number)=>{
                        return(
                            <SwiperSlide key={index}>
                                <div className="slide">
                                    <img src={item.urlToImage} alt="carosel-img-template"/>
                                    <p className="time-title"><span className="red">Technology</span> / {moment(item.publishedAt).format('dddd, MMMM DD, YYYY')}</p>
                                    <p className="slide-title">{item.title}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                <div className="pre arrow" ref={navigationPrevRef}><ChevronLeft/></div>
                <div className="next arrow" ref={navigationNextRef} ><ChevronRight/></div>
            </Swiper>
        </div>
    )
}

export default CaroselTemplate;