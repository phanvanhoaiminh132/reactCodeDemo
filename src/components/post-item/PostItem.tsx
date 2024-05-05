import moment from "moment";
import { articlesType } from "../../types/Types";
import "./PostItem.scss";

const PostItem = ({dataValue}:{dataValue:articlesType}) =>{
    return(
        <div className="post-item">
            <img src={dataValue.urlToImage} alt="post-img"/>
            <div className="post-text">
                <p className="time-title">
                    <span className="red">Technology</span> {moment(dataValue.publishedAt).format('dddd, MMMM DD, YYYY')}
                </p>
                <p className="title">{dataValue.title.slice(0,35)}...</p>
            </div>
        </div>
    )
}

export default PostItem;