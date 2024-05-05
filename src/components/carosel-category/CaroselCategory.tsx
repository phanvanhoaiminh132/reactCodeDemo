import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { articlesType } from "../../types/Types";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import moment from "moment";
import "./CaroselCategory.scss";

const CaroselCategory = ({dataValue}:{dataValue:articlesType[]}) =>{
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return(
        <div id="carosel-category">
            <Swiper
                className="swiper-category"
                modules={[Navigation, Scrollbar]}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper:any) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                loop={true}
                slidesPerView={1}
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
    )
}

export default CaroselCategory;