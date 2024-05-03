import { Col, Row } from "react-bootstrap";
import "./PopularList.scss";
import { categoryTagType } from "../../contant/Contant";
import CategoryTab from "../category-tab/CategoryTab";

const PopularList = () =>{
    const categoryTab:categoryTagType  ={
        title: "Popular",
        isShowViewAll: true,
    }
    return(
        <div className="popular">
            <Row>
                <Col md={12}>
                    <CategoryTab {...categoryTab}/>
                </Col>

                <Col lg={6} md={12}>
                    <div className="popular-item">
                        <img src="/images/img-popular.jpg" alt="img-popular"/>
                        <p className="time-title"><span className="red">Technology</span> / January 01, 2045</p>
                        <p className="title">Sanctus amet sed amet ipsum lorem</p>
                        <p className="description">Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...</p>
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className="popular-item">
                        <img src="/images/img-popular.jpg" alt="img-popular"/>
                        <p className="time-title"><span className="red">Technology</span> / January 01, 2045</p>
                        <p className="title">Sanctus amet sed amet ipsum lorem</p>
                        <p className="description">Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default PopularList;