import "./PostItem.scss";

const PostItem = () =>{
    return(
        <div className="post-item">
            <img src="/images/img-post.jpg" alt="post-img"/>
            <div className="post-text">
                <p className="time-title">
                    <span className="red">Technology</span> / January 01, 2045
                </p>
                <p className="title">Sanctus amet sed amet ipsum lorem</p>
            </div>
        </div>
    )
}

export default PostItem;