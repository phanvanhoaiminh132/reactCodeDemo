import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import "./CaroselCategory.scss";


const CaroselCategory = () =>{
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
                <SwiperSlide>
                    <div className="slide" style={{backgroundImage: 'url(/images/img-slide-category.jpg)'}}>
                        <span className="time-title">Technology / January 01, 2045</span>
                        <span className="slide-title">Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr sea sed</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide" style={{backgroundImage: 'url(/images/img-slide-category.jpg)'}}>
                        <span className="time-title">Technology / January 01, 2045</span>
                        <span className="slide-title">Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr sea sed</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide" style={{backgroundImage: 'url(/images/img-slide-category.jpg)'}}>
                        <span className="time-title">Technology / January 01, 2045</span>
                        <span className="slide-title">Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr sea sed</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide" style={{backgroundImage: 'url(/images/img-slide-category.jpg)'}}>
                        <span className="time-title">Technology / January 01, 2045</span>
                        <span className="slide-title">Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr sea sed</span>
                    </div>
                </SwiperSlide>
                <div className="pre arrow" ref={navigationPrevRef}><ChevronLeft/></div>
                <div className="next arrow" ref={navigationNextRef} ><ChevronRight/></div>
            </Swiper>
        </div>
    )
}

export default CaroselCategory;