import { Breadcrumb, Col, Row } from "react-bootstrap";
import "./News.scss";
import { articlesType } from "../../types/Types";
import moment from "moment";
import React from "react";

const News = React.memo(({dataValue}:{dataValue:articlesType}) =>{
    return(
        <div className="news">
            <Row>
                <Col xs={12}>
                    <img className="main-img" src={dataValue.urlToImage} alt="img-new"/>
                </Col>
                <Col xs={12}>
                    <div className="box-new">
                        <div className="breadcrumb-template">
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Technology</Breadcrumb.Item>
                                <Breadcrumb.Item active>{moment(dataValue.publishedAt).format('dddd, MMMM DD, YYYY')}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <h2 className="main-title">{dataValue.title}</h2>
                        <p>{dataValue.content}</p>
                        <div className="block-new">
                            <h3 className="sub-title">{dataValue.title}</h3>
                            <img className="sub-img left" src={dataValue.urlToImage} alt="img-new"/>
                            <span className="title">{dataValue.content}{dataValue.content}{dataValue.content}{dataValue.content}</span>
                        </div>
                        <div className="block-new">
                            <h3 className="sub-title">{dataValue.title}</h3>
                            <img className="sub-img right" src="/images/sub-new2.jpg" alt="img-new"/>
                            <span className="title">{dataValue.content}{dataValue.content}</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
})

export default News;