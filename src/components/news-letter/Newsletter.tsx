import { Button, Col, Form, Row } from "react-bootstrap";
import { categoryTagType } from "../../types/Types";
import CategoryTab from "../category-tab/CategoryTab";
import "./NewsLetter.scss";

const NewsLetter = () =>{
    const categoryTab:categoryTagType  ={
        title: "Newsletter",
        isShowViewAll: false,
    }
    return(
        <div className="news-letter">
            <Row>
                <Col md={12}>
                    <CategoryTab {...categoryTab}/>
                </Col>

                <Col md={12}>
                    <div className="mail">
                        <p className="title">Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                        <Form className="d-flex">
                            <Form.Control
                                type="email"
                                placeholder="Your Email"
                                aria-label="Your Email"
                            />
                            <Button className="button-send-mail" variant="outline-success">
                                Sign Up
                            </Button>
                        </Form>
                        <span className="sub-title">Sit eirmod nonumy kasd eirmod</span>
                    </div>
                </Col>
                <Col md={12}>
                    <img className="img-news-letter" src="/images/img-newsletter.jpg" alt="news-letter-img"/>
                </Col>
            </Row>
        </div>
    )
}

export default NewsLetter;