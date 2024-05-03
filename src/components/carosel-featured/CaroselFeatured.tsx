import React, { useEffect, useState } from "react";
import { categoryTagType } from "../../contant/Contant";
import CategoryTab from "../category-tab/CategoryTab";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import "./CaroselFeatured.scss";

const CaroselFeatured = () =>{
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
                    <SwiperSlide>
                        <div className="slide" style={{backgroundImage: 'url(/images/img-featured.jpg)'}}>
                            <span className="time-title">Technology / January 01, 2045</span>
                            <span className="slide-title">Sanctus amet sed amet ipsum lorem</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide" style={{backgroundImage: 'url(/images/img-featured.jpg)'}}>
                            <span className="time-title">Technology / January 01, 2045</span>
                            <span className="slide-title">Sanctus amet sed amet ipsum lorem</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide" style={{backgroundImage: 'url(/images/img-featured.jpg)'}}>
                            <span className="time-title">Technology / January 01, 2045</span>
                            <span className="slide-title">Sanctus amet sed amet ipsum lorem</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide" style={{backgroundImage: 'url(/images/img-featured.jpg)'}}>
                            <span className="time-title">Technology / January 01, 2045</span>
                            <span className="slide-title">Sanctus amet sed amet ipsum lorem</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide" style={{backgroundImage: 'url(/images/img-featured.jpg)'}}>
                            <span className="time-title">Technology / January 01, 2045</span>
                            <span className="slide-title">Sanctus amet sed amet ipsum lorem</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide" style={{backgroundImage: 'url(/images/img-featured.jpg)'}}>
                            <span className="time-title">Technology / January 01, 2045</span>
                            <span className="slide-title">Sanctus amet sed amet ipsum lorem</span>
                        </div>
                    </SwiperSlide>
                    <div className="pre arrow" ref={navigationPrevRef}><ChevronLeft/></div>
                    <div className="next arrow" ref={navigationNextRef} ><ChevronRight/></div>
                </Swiper>
            </div>
        </>
    )
}

export default CaroselFeatured;