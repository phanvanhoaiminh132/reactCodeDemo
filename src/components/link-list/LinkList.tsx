import { ChevronRight } from "react-bootstrap-icons";
import { linkType } from "../../types/Types";
import "./LinkList.scss";
import React from "react";


const LinkList = React.memo((data: linkType) =>{
    return(
        <div className="link">
            <p className="link-title">{data.title}</p>
            <div className="link-list">
            {
                data.links ?
                    data.links.map((item:string, index: number)=>{
                        return(
                            <div className="link-item" key={index}>
                                <ChevronRight className="icon"/>
                                 <span className="title">{item}</span>
                            </div>
                        )
                    })
                :
                   ""
            }
            </div>
        </div>
    )
})

export default LinkList;