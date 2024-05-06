import { Col, Row } from "react-bootstrap"
import PostItem from "../post-item/PostItem"
import { articlesType } from "../../types/Types";
import React from "react";

const PostPopular = React.memo(({dataValue}:{dataValue:articlesType[]}) =>{
    return(
        <div className="post-popular">
            <Row>

                {   
                    dataValue.map((item:articlesType, index:number)=>{
                        return(
                            <Col lg={12} xl={6} key={index}>
                                <PostItem dataValue={item}/>
                            </Col>
                        ) 
                    })
                }
            </Row>
        </div>
    )
})

export default PostPopular;