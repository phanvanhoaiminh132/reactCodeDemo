import React from "react";
import { tagType } from "../../contant/Contant";
import "./TagList.scss";


const TagList: React.FC<tagType> = (data: tagType) =>{
    return(
        <div className="tag">
            <p className="tag-title">{data.title}</p>
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
}

export default TagList;