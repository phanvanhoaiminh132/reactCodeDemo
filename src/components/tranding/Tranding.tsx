import { Col, Row } from "react-bootstrap";
import CategoryTab from "../category-tab/CategoryTab";
import "./Tranding.scss";
import PostItem from "../post-item/PostItem";
import { articlesType, categoryTagType } from "../../types/Types";
import React from "react";

const Tranding = React.memo(({dataValue}:{dataValue:articlesType[]}) =>{
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
                {   
                    dataValue.map((item:articlesType, index:number)=>{
                        return(
                            <PostItem key={index} dataValue={item}/>
                        ) 
                    })
                }
                </Col>
            </Row>
        </div>
    )
})

export default Tranding;