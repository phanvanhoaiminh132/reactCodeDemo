import { Col, Row } from "react-bootstrap"
import PostItem from "../post-item/PostItem"

const PostPopular = () =>{
    return(
        <div className="post-popular">
            <Row>
                <Col lg={12} xl={6}>
                    <PostItem/>
                </Col>
                <Col lg={12} xl={6}>
                    <PostItem/>
                </Col>
                <Col lg={12} xl={6}>
                    <PostItem/>
                </Col>
                <Col lg={12} xl={6}>
                    <PostItem/>
                </Col>
            </Row>
        </div>
    )
}

export default PostPopular;