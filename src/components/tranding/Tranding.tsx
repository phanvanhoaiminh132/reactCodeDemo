import { Col, Row } from "react-bootstrap";
import { categoryTagType } from "../../contant/Contant";
import CategoryTab from "../category-tab/CategoryTab";
import "./Tranding.scss";
import PostItem from "../post-item/PostItem";

const Tranding = () =>{
    const categoryTab:categoryTagType  ={
        title: "Tranding",
        isShowViewAll: false,
    }
    return(
        <div className="tranding">
            <Row>
                <Col md={12}>
                    <CategoryTab {...categoryTab}/>
                </Col>

                <Col md={12}>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                </Col>
            </Row>
        </div>
    )
}

export default Tranding;