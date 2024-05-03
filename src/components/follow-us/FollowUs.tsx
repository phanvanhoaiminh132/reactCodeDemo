import { Col, Row } from "react-bootstrap";
import "./FollowUs.scss";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-bootstrap-icons";
import CategoryTab from "../category-tab/CategoryTab";
import { categoryTagType } from "../../contant/Contant";

const FollowUs = () =>{
    const categoryTab:categoryTagType  ={
        title: "Follow Us",
        isShowViewAll: false,
    }
    
    return(
        <div className="follow-us">
            <Row>
                <Col md={12}>
                    <CategoryTab {...categoryTab}/>
                </Col>
                <Col xl={6} lg={12}>
                    <div className="follow-item blue">
                        <div className="icon"><Twitter/></div>
                        <span className="title">12,345 Followers</span>
                    </div>
                </Col>
                <Col xl={6} lg={12}>
                    <div className="follow-item blue-1">
                        <div className="icon"><Facebook/></div>
                        <span className="title">12,345 Fans</span>
                    </div>
                </Col>
                <Col xl={6} lg={12}>
                    <div className="follow-item green">
                        <div className="icon"><Instagram/></div>
                        <span className="title">12,345 Followers</span>
                    </div>
                </Col>
                <Col xl={6} lg={12}>
                    <div className="follow-item pubple">
                        <div className="icon"><Linkedin/></div>
                        <span className="title">12,345 Connects</span>
                    </div>
                </Col>

                <Col xl={6} lg={12}>
                    <div className="follow-item orange">
                        <div className="icon"><Youtube/></div>
                        <span className="title">12,345 Subscribers</span>
                    </div>
                </Col>

                <Col xl={6} lg={12}>
                    <div className="follow-item blue-2">
                        <div className="icon"><Youtube/></div>
                        <span className="title">12,345 Followers</span>
                    </div>
                </Col>
            </Row>
        </div>
        
    )
}

export default FollowUs;