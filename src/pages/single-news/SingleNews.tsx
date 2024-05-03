import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import FollowUs from "../../components/follow-us/FollowUs";
import NewsLetter from "../../components/news-letter/Newsletter";
import Tranding from "../../components/tranding/Tranding";
import TagList from "../../components/tag-list/TagList";
import { tagsFooterTag } from "../../contant/Contant";

const SingleNews = () =>{
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

export default SingleNews;