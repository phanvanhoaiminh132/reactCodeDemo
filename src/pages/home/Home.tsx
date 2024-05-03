import { Col, Container, Row } from "react-bootstrap";
import CaroselTopHome from "../../components/carosel-top-home/CaroselTopHome";
import CaroselCategory from "../../components/carosel-category/CaroselCategory";
import CategoryList from "../../components/category-list/CategoryList";
import CaroselFeatured from "../../components/carosel-featured/CaroselFeatured";
import CaroselTemplate from "../../components/carosel-template/CaroselTemplate";
import PopularList from "../../components/popular-list/PopularList";
import "./Home.scss";
import FollowUs from "../../components/follow-us/FollowUs";
import NewsLetter from "../../components/news-letter/Newsletter";
import Tranding from "../../components/tranding/Tranding";
import { tagsFooterTag } from "../../contant/Contant";
import TagList from "../../components/tag-list/TagList";

const Home = () =>{
    return(
        <Container>
            <CaroselTopHome/>
            <Row>
                <Col lg={8} md={12}>
                    <CaroselCategory/>
                </Col>

                <Col lg={4} md={12}>
                    <CategoryList />
                </Col>
                
                <Col>
                    <CaroselFeatured/>
                </Col>

                <Col lg={6} md={12}>
                    <CaroselTemplate/>
                </Col>

                <Col lg={6} md={12}>
                    <CaroselTemplate/>
                </Col>

                <Col lg={6} md={12}>
                    <CaroselTemplate/>
                </Col>

                <Col lg={6} md={12}>
                    <CaroselTemplate/>
                </Col>

                <Col lg={8} md={12}>
                    <PopularList/>
                    <img className="popular-img" src="/images/img-center-header.png" alt="img-popular"/>
                    <PopularList/>
                </Col>

                <Col lg={4} md={12}>
                    <FollowUs/>
                    <NewsLetter/>
                    <Tranding />

                    <TagList data={tagsFooterTag} styleSiderBar={true}/>
                </Col>
            </Row>
            
        </Container>
    )
}


export default Home;