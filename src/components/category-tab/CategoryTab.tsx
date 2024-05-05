import { categoryTagType } from "../../types/Types";
import "./CategoryTab.scss";

const CategoryTab = ({title, isShowViewAll}:categoryTagType) =>{
    return(
        <div className="category-tab">
            <span className="title">{title}</span>
            { isShowViewAll ? <span className="view-all">View All</span>: "" }
        </div>
    )
}

export default CategoryTab;