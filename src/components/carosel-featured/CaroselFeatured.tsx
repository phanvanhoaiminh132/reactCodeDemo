import React, { useEffect, useState } from "react";
import CategoryTab from "../category-tab/CategoryTab";
import { articlesType, categoryTagType } from "../../types/Types";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import "./CaroselFeatured.scss";
import moment from "moment";

const CaroselFeatured = ({dataValue}:{dataValue:articlesType[]}) =>{
    const categoryTab:categoryTagType  ={
        title: "Featured",
        isShowViewAll: true,
    }

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
        <>
            <CategoryTab {...categoryTab}/>

            <div id="carosel-featured">
                <Swiper
                    className="swiper-featured"
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
                        windowDimensions > 1399
                        ? 4
                        : windowDimensions > 1199 
                        ? 3
                        : windowDimensions > 768 
                        ? 2
                        : 1
                    }
                    speed={1200}
                >
                    {
                        dataValue.map((item:articlesType, index:number)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <div className="slide" style={{backgroundImage: `url(${item.urlToImage})`}}>
                                        <span className="time-title">Technology / {moment(item.publishedAt).format('dddd, MMMM DD, YYYY')}</span>
                                        <span className="slide-title">{item.title}</span>
                                    </div>
                                </SwiperSlide>
                            ) 
                        })
                    }
                    <div className="pre arrow" ref={navigationPrevRef}><ChevronLeft/></div>
                    <div className="next arrow" ref={navigationNextRef} ><ChevronRight/></div>
                </Swiper>
            </div>
        </>
    )
}

export default CaroselFeatured;