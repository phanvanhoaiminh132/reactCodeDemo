import { Col, Container, Row, Pagination, Breadcrumb } from "react-bootstrap";
import PopularList from "../../components/popular-list/PopularList";
import FollowUs from "../../components/follow-us/FollowUs";
import NewsLetter from "../../components/news-letter/Newsletter";
import Tranding from "../../components/tranding/Tranding";
import TagList from "../../components/tag-list/TagList";
import { tagsFooterTag } from "../../contant/Contant";
import "./Category.scss";
import PostPopular from "../../components/post-popular/PostPopular";

const Category = () =>{
    let items = [];
    let active = 1;

    for (let number = 1; number <= 3; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
            </Pagination.Item>,
        );
    }

    return(
        <Container>
            <Row>
                <Col xl={12}>
                    <div className="breadcrumb-template">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
                            <Breadcrumb.Item active>Technology</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </Col>

                <Col lg={8} md={12}>
                    <PopularList/>
                    <img className="popular-img" src="/images/img-center-header.png" alt="img-popular"/>
                    <PostPopular/>
                    <div className="pagination-category">
                        <Pagination>
                            <Pagination.Prev />
                            {items}
                            <Pagination.Next />
                        </Pagination>
                    </div>
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

export default Category;