import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import FollowUs from "../../components/follow-us/FollowUs";
import NewsLetter from "../../components/news-letter/Newsletter";
import Tranding from "../../components/tranding/Tranding";
import TagList from "../../components/tag-list/TagList";
import { tagsFooterTag } from "../../contant/Contant";
import News from "../../components/news/News";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { articlesType } from "../../types/Types";
import { RootState } from "../../reducers";
import { getPopularData, getPostDetailData } from "../../actions/NewsAction";

const SingleNews = () =>{
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getPopularData(2));
        dispatch(getPostDetailData());
    }, [dispatch]);

    const newsPostPopularData:articlesType[] = useSelector(
        (state:RootState) => state.NewsReducer.dataPostPopular
    );

    const newsPostDetailData:articlesType[] = useSelector(
        (state:RootState) => state.NewsReducer.dataPostDetail
    );
    return(
        <Container>
        <Row>
            <Col xl={12}>
                <div className="breadcrumb-template">
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Technology</Breadcrumb.Item>
                        <Breadcrumb.Item active>News Tiltle</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </Col>

            <Col lg={8} md={12}>
                {
                    newsPostDetailData.length > 0 ?
                    <News dataValue={newsPostDetailData[0]}/>:
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

export default SingleNews;