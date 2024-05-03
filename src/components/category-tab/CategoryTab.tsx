import { categoryTagType } from "../../contant/Contant";
import "./CategoryTab.scss";

const CategoryTab = ({title, isShowViewAll}:categoryTagType) =>{
    return(
        <div className="category-tab">
            <span className="title">{title}</span>
            { isShowViewAll ? <a className="view-all">View All</a>: "" }
        </div>
    )
}

export default CategoryTab;