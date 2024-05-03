import React from "react";
import { linkType } from "../../contant/Contant";
import { ChevronRight } from "react-bootstrap-icons";
import "./LinkList.scss";


const LinkList: React.FC<linkType> = (data: linkType) =>{
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
}

export default LinkList;