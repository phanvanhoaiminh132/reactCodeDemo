import { Col, Container, Row } from "react-bootstrap";
import CaroselTopHome from "../../components/carosel-top-home/CaroselTopHome";
import CaroselCategory from "../../components/carosel-category/CaroselCategory";
import CategoryList from "../../components/category-list/CategoryList";
import CaroselFeatured from "../../components/carosel-featured/CaroselFeatured";
import CaroselTemplate from "../../components/carosel-template/CaroselTemplate";
import PopularList from "../../components/popular-list/PopularList";
import FollowUs from "../../components/follow-us/FollowUs";
import NewsLetter from "../../components/news-letter/Newsletter";
import Tranding from "../../components/tranding/Tranding";
import { tagsFooterTag } from "../../contant/Contant";
import TagList from "../../components/tag-list/TagList";
import PostPopular from "../../components/post-popular/PostPopular";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBusinessData, getCategoryData, getEntertainmentData, getFeaturedData, getPopularData, getPostPopularData, getSportsData, getTechnologyData } from "../../actions/NewsAction";
import { useSelector } from 'react-redux';
import "./Home.scss";
import { RootState } from "../../reducers";
import { articlesType } from "../../types/Types";

const Home = () =>{
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getBusinessData());
        dispatch(getTechnologyData());
        dispatch(getEntertainmentData());
        dispatch(getSportsData());
        dispatch(getFeaturedData());
        dispatch(getCategoryData());
        dispatch(getPopularData(2));
        dispatch(getPostPopularData());
    }, [dispatch]);
    
    const newsReducerData:articlesType[] = useSelector(
        (state:RootState) => state.NewsReducer.dataBusiness
    );

    const newsTechnologyData:articlesType[] = useSelector(
        (state:RootState) => state.NewsReducer.dataTechnology
    );

    const newsEntertainmentData:articlesType[] = useSelector(
        (state:RootState) => state.NewsReducer.dataTechnology
    );

    const newsSportData:articlesType[] = useSelector(
        (state:RootState) => state.NewsReducer.dataTechnology
    );

    const newsFeaturedData:articlesType[] = useSelector(
        (state:RootState) => state.NewsReducer.dataFeatured
    );

    const newsCategoryData:articlesType[] = useSelector(
        (state:RootState) => state.NewsReducer.dataCategory
    );

    const newsPopularData:articlesType[] = useSelector(
        (state:RootState) => state.NewsReducer.dataPopular
    );

    const newsPostPopularData:articlesType[] = useSelector(
        (state:RootState) => state.NewsReducer.dataPostPopular
    );
    
    return(
        <Container>
            <CaroselTopHome/>
            <Row>
                <Col lg={8} md={12}>
                    {
                        newsCategoryData.length > 0 ?
                        <CaroselCategory dataValue={newsCategoryData}/>:
                        <></>
                    }
                </Col>
                <Col lg={4} md={12}>
                    <CategoryList />
                </Col>

                {
                    newsFeaturedData.length > 0 ?
                    <Col>
                        <CaroselFeatured dataValue={newsFeaturedData} />
                    </Col>:
                    <></>
                }
                
                {
                    newsReducerData.length > 0 ?
                    <Col lg={6} md={12}>
                        <CaroselTemplate dataValue={newsReducerData} title="Business"/>
                    </Col>:
                    <></>
                }

                {
                    newsTechnologyData.length > 0 ?
                    <Col lg={6} md={12}>
                        <CaroselTemplate dataValue={newsTechnologyData} title="Technology"/>
                    </Col>:
                    <></>
                }

                {
                    newsEntertainmentData.length > 0 ?
                    <Col lg={6} md={12}>
                        <CaroselTemplate dataValue={newsEntertainmentData} title="Entertainment"/>
                    </Col>:
                    <></>
                }
                
                {
                    newsSportData.length > 0 ?
                    <Col lg={6} md={12}>
                        <CaroselTemplate dataValue={newsSportData} title="Sports"/>
                    </Col>:
                    <></>
                }

                <Col lg={8} md={12}>
                    {
                        newsPopularData.length > 0 ?
                        <PopularList dataValue={newsPopularData}/>:
                        <></>
                    }

                    {
                        newsPostPopularData.length > 0 ?
                        <PostPopular dataValue={newsPostPopularData}/>:
                        <></>
                    }
                    
                    <img className="popular-img" 
                        src="/images/img-center-header.png" 
                        alt="img-popular"
                    />
                     {
                        newsPopularData.length > 0 ?
                        <PopularList dataValue={newsPopularData}/>:
                        <></>
                    }
                </Col>

                <Col lg={4} md={12}>
                    <FollowUs/>
                    <NewsLetter/>
                    {
                        newsPostPopularData.length > 0 ?
                        <Tranding dataValue={newsPostPopularData}/>:
                        <></>
                    }
                    <TagList data={tagsFooterTag} styleSiderBar={true}/>
                </Col>
            </Row>
        </Container>
    )
}


export default Home;