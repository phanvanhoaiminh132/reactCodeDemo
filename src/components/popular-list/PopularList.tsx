import { Col, Row } from "react-bootstrap";
import "./PopularList.scss";
import CategoryTab from "../category-tab/CategoryTab";
import { articlesType, categoryTagType } from "../../types/Types";
import moment from "moment";
import React from "react";

const PopularList = React.memo(({dataValue}:{dataValue:articlesType[]}) =>{
    const categoryTab:categoryTagType ={
        title: "Popular",
        isShowViewAll: true,
    }
    return(
        <div className="popular">
            <Row>
                <Col md={12}>
                    <CategoryTab {...categoryTab}/>
                </Col>

                {
                    dataValue.map((item:articlesType, index:number)=>{
                        return(
                            <Col lg={6} md={12} key={index}>
                                <div className="popular-item">
                                    <img src={item.urlToImage} alt="img-popular"/>
                                    <p className="time-title"><span className="red">Technology</span> / {moment(item.publishedAt).format('dddd, MMMM DD, YYYY')}</p>
                                    <p className="title">{item.title.slice(0,65)}...</p>
                                    <p className="description">{item.description.slice(0, 100)}...</p>
                                </div>
                            </Col>
                        ) 
                    })
                }
            </Row>
        </div>
    )
})

export default PopularList;