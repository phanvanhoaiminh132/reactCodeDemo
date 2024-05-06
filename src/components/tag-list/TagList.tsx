import React from "react";
import { tagListType } from "../../types/Types";
import "./TagList.scss";

const TagList = React.memo(({data, styleSiderBar}:tagListType) =>{
    return(
        <div className="tag">
            <p className={"tag-title" + (styleSiderBar ? " style-bar": "")}>{data.title}</p>
            <div className="tag-list">
            {
                data.tags ?
                    data.tags.map((item:string, index: number)=>{
                        return(<span key={index} className="tag-item">{item}</span>)
                    })
                :
                   ""
            }
            </div>
        </div>
    )
})

export default TagList;