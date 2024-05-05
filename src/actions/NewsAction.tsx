import axios from "../api/api.service";
import { Dispatch } from 'redux';
import { 
  BUSINESS_DATA, 
  CATEGORY_DATA, 
  ENTERTAINMENT_DATA, 
  FAILURE, 
  FEATURED_DATA, 
  POPULAR_DATA, 
  POST_DETAIL_DATA, 
  POST_POPULAR_All_DATA, 
  POST_POPULAR_DATA, 
  SPORTS_DATA, 
  TECHNOLOGY_DATA 
} from "../types/TypeRedux";
import { countPerPageCategory } from "../contant/Contant";
import { articlesType } from "../types/Types";

const apiKey = process.env.REACT_APP_API_KEY;

export const getCategoryData = () => {
  return async (dispatch: Dispatch) => {
     try {
       const response = await axios.get(`/everything?domains=wsj.com&apiKey=${apiKey}`);
       if (response.data.status !== "ok") {
          dispatch({ type: CATEGORY_DATA, payload: [] });
       }else{
          dispatch({ type: CATEGORY_DATA, payload: response.data.articles});
       }
     } catch (error:any) {
       dispatch({ type: FAILURE, payload: error.message });
     }
  };
};

export const getFeaturedData = () => {
  return async (dispatch: Dispatch) => {
     try {
       const response = await axios.get(`/top-headlines?sources=techcrunch&apiKey=${apiKey}`);
       if (response.data.status !== "ok") {
          dispatch({ type: FEATURED_DATA, payload: [] });
       }else{
          dispatch({ type: FEATURED_DATA, payload: response.data.articles});
       }
     } catch (error:any) {
       dispatch({ type: FAILURE, payload: error.message });
     }
  };
};

export const getBusinessData = () => {
  return async (dispatch: Dispatch) => {
     try {
       const response = await axios.get(`/everything?domains=wsj.com&apiKey=${apiKey}`);
       if (response.data.status !== "ok") {
          dispatch({ type: BUSINESS_DATA, payload: [] });
       }else{
          dispatch({ type: BUSINESS_DATA, payload: response.data.articles});
       }
     } catch (error:any) {
       dispatch({ type: FAILURE, payload: error.message });
     }
  };
};

export const getTechnologyData = () => {
  return async (dispatch: Dispatch) => {
     try {
       const response = await axios.get(`/everything?domains=wsj.com&apiKey=${apiKey}`);
       if (response.data.status !== "ok") {
          dispatch({ type: TECHNOLOGY_DATA, payload: [] });
       }else{
          dispatch({ type: TECHNOLOGY_DATA, payload: response.data.articles});
       }
     } catch (error:any) {
       dispatch({ type: FAILURE, payload: error.message });
     }
  };
};

export const getEntertainmentData = () => {
  return async (dispatch: Dispatch) => {
     try {
       const response = await axios.get(`/everything?domains=wsj.com&apiKey=${apiKey}`);
       if (response.data.status !== "ok") {
          dispatch({ type: ENTERTAINMENT_DATA, payload: [] });
       }else{
          dispatch({ type: ENTERTAINMENT_DATA, payload: response.data.articles});
       }
     } catch (error:any) {
       dispatch({ type: FAILURE, payload: error.message });
     }
  };
};

export const getSportsData = () => {
  return async (dispatch: Dispatch) => {
     try {
       const response = await axios.get(`/everything?domains=wsj.com&apiKey=${apiKey}`);
       if (response.data.status !== "ok") {
          dispatch({ type: SPORTS_DATA, payload: [] });
       }else{
          dispatch({ type: SPORTS_DATA, payload: response.data.articles});
       }
     } catch (error:any) {
       dispatch({ type: FAILURE, payload: error.message });
     }
  };
};

export const getPopularData = (count:number) => {
  return async (dispatch: Dispatch) => {
     try {
       const response = await axios.get(`/top-headlines?sources=techcrunch&apiKey=${apiKey}`);
       if (response.data.status !== "ok") {
          dispatch({ type: POPULAR_DATA, payload: [] });
       }else{
          dispatch({ type: POPULAR_DATA, payload: response.data.articles.slice(0,count)});
       }
     } catch (error:any) {
       dispatch({ type: FAILURE, payload: error.message });
     }
  };
};

export const getPostPopularData = () => {
  return async (dispatch: Dispatch) => {
     try {
       const response = await axios.get(`/everything?domains=wsj.com&apiKey=${apiKey}`);
       if (response.data.status !== "ok") {
          dispatch({ type: POST_POPULAR_DATA, payload: [] });
       }else{
          dispatch({ type: POST_POPULAR_DATA, payload: response.data.articles.slice(0,4)});
       }
     } catch (error:any) {
       dispatch({ type: FAILURE, payload: error.message });
     }
  };
};

export const getPostPopularAllData = (currentPage:number) => {
  return async (dispatch: Dispatch) => {
     try {
       const response = await axios.get(`/everything?domains=wsj.com&apiKey=${apiKey}`);

       if (response.data.status !== "ok") {
          dispatch({ type: POST_POPULAR_All_DATA, payload: [] });
       }else{
          let countData:number = response.data.totalResults;
          let data:articlesType[] = [];

          if(Math.floor(countData/countPerPageCategory) + 1 === currentPage){
            data = response.data.articles.slice((currentPage - 1)*countPerPageCategory, countData);
          }else{
            data = response.data.articles.slice((currentPage - 1)*countPerPageCategory, currentPage*countPerPageCategory);
          }
          dispatch({type: POST_POPULAR_All_DATA, payload: {data:data, countData:response.data.totalResults}});
       }
     } catch (error:any) {
       dispatch({ type: FAILURE, payload: error.message });
     }
  };
};

export const getPostDetailData = () => {
  return async (dispatch: Dispatch) => {
     try {
       const response = await axios.get(`/everything?domains=wsj.com&apiKey=${apiKey}`);
       
       if (response.data.status !== "ok") {
          dispatch({ type: POST_DETAIL_DATA, payload: [] });
       }else{
          dispatch({type: POST_DETAIL_DATA, payload:response.data.articles.slice(0,1)});
       }
     } catch (error:any) {
       dispatch({ type: FAILURE, payload: error.message });
     }
  };
};



