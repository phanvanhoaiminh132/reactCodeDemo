import { categoryTagType } from "../../contant/Contant";
import CategoryTab from "../category-tab/CategoryTab";
import "./CategoryList.scss";


const CategoryList = () =>{
    const categoryTab:categoryTagType ={
        title: "Categories",
        isShowViewAll: true,
    }

    return(
        <div className="category-list">
            <CategoryTab {...categoryTab} />

            <div className="category" style={{backgroundImage: 'url(/images/img-category.png)'}}>
                <span className="title">Business</span>
            </div>

            <div className="category" style={{backgroundImage: 'url(/images/img-category.png)'}}>
                <span className="title">Technology</span>
            </div>

            <div className="category" style={{backgroundImage: 'url(/images/img-category.png)'}}>
                <span className="title">Entertainment</span>
            </div>

            <div className="category" style={{backgroundImage: 'url(/images/img-category.png)'}}>
                <span className="title">Sports</span>
            </div>
        </div>
    )
}

export default CategoryList;