import { Col, Container, Row, Pagination, Breadcrumb } from "react-bootstrap";
import PopularList from "../../components/popular-list/PopularList";
import FollowUs from "../../components/follow-us/FollowUs";
import NewsLetter from "../../components/news-letter/Newsletter";
import Tranding from "../../components/tranding/Tranding";
import TagList from "../../components/tag-list/TagList";
import { countPerPageCategory, tagsFooterTag } from "../../contant/Contant";
import PostPopular from "../../components/post-popular/PostPopular";
import { useDispatch, useSelector } from "react-redux";
import "./Category.scss";
import { useCallback, useEffect, useState } from "react";
import { getPopularData, getPostPopularAllData, getPostPopularData } from "../../actions/NewsAction";
import { articlesType, dataPostAllPopularType } from "../../types/Types";
import { RootState } from "../../reducers";

const Category = () =>{
    const dispatch = useDispatch<any>();
    const [pagination, setPagination] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {;
        dispatch(getPopularData(4));
        dispatch(getPostPopularData());
        dispatch(getPostPopularAllData(1));
    }, [dispatch]);

    const newsPopularData:articlesType[] = useSelector(
        (state:RootState) => state.NewsReducer.dataPopular
    );

    const newsPostPopularData:articlesType[] = useSelector(
        (state:RootState) => state.NewsReducer.dataPostPopular
    );

    const newsPostPopularAllData:dataPostAllPopularType = useSelector(
        (state:RootState) => state.NewsReducer.dataPostAllPopular
    );

    const changePagination = useCallback((currentPage:number) =>{
        if(currentPage > 0 && currentPage <= newsPostPopularAllData.countData / countPerPageCategory + 1){
            setCurrentPage(currentPage);
            dispatch(getPostPopularAllData(currentPage));
        }
    },[dispatch, newsPostPopularAllData.countData])

    const setupPagination = useCallback(() =>{
        let itemTemp:any[] = []
        for (
                let number:number = 1; 
                number <= ( newsPostPopularAllData.countData / countPerPageCategory + 1); 
                number++
            ) {
                itemTemp.push(
                    <Pagination.Item 
                        key={number} 
                        active={number === currentPage} 
                        onClick={()=>changePagination(number)}
                    >
                        {number}
                    </Pagination.Item>,
            );
        }
        setPagination(itemTemp);
    },[changePagination, currentPage, newsPostPopularAllData.countData])

    useEffect(()=>{
        setupPagination();
    },[newsPostPopularAllData, setupPagination]);
    

    return(
        <Container>
            <Row>
                <Col xl={12}>
                    <div className="breadcrumb-template">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
                            <Breadcrumb.Item active>Technology</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </Col>

                <Col lg={8} md={12}>
                    {
                        newsPopularData.length > 0 ?
                        <PopularList dataValue={newsPopularData}/>:
                        <></>
                    }
                    
                    <img className="popular-img" src="/images/img-center-header.png" alt="img-popular"/>
                    
                    {
                        newsPostPopularAllData.countData > 0 ?
                        <PostPopular dataValue={newsPostPopularAllData.data}/>:
                        <></>
                    }

                    <div className="pagination-category">
                        <Pagination>
                            <Pagination.Prev  onClick={()=>changePagination(currentPage - 1)}/>
                                {pagination}
                            <Pagination.Next onClick={()=>changePagination(currentPage + 1)} />
                        </Pagination>
                    </div>
                </Col>

                <Col lg={4} md={12}>
                    <FollowUs/>
                    <NewsLetter/>
                    {
                        newsPostPopularData.length > 0 ?
                        <Tranding dataValue={newsPostPopularData}/>:
                        <></>
                    }
                    <TagList data={tagsFooterTag} styleSiderBar={true}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Category;