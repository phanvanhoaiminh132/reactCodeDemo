
import {  initStateType } from "../types/Types";
import { 
  BUSINESS_DATA, 
  CATEGORY_DATA, 
  ENTERTAINMENT_DATA, 
  FEATURED_DATA, 
  POPULAR_DATA, 
  POST_DETAIL_DATA, 
  POST_POPULAR_All_DATA, 
  POST_POPULAR_DATA, 
  SPORTS_DATA, 
  TECHNOLOGY_DATA 
} from "../types/TypeRedux";

const initstate:initStateType = {
  dataBusiness: [],
  dataTechnology: [],
  dataEntertainment: [],
  dataSports: [],
  dataFeatured: [],
  dataCategory: [],
  dataPopular: [],
  dataPostPopular: [],
  dataPostAllPopular: {
    data:[],
    countData: 0
  },
  dataPostDetail: [],
}

const NewsReducer = (state:initStateType = initstate, action: any): initStateType => {
    switch (action.type) {
      case CATEGORY_DATA:
        return {...state, dataCategory: action.payload};
      case FEATURED_DATA:
        return {...state, dataFeatured: action.payload};
      case BUSINESS_DATA:
        return {...state, dataBusiness: action.payload};
      case TECHNOLOGY_DATA:
        return {...state, dataTechnology: action.payload};
      case ENTERTAINMENT_DATA:
        return {...state, dataEntertainment: action.payload};
      case SPORTS_DATA:
        return {...state, dataSports: action.payload};
      case POPULAR_DATA:
        return {...state, dataPopular: action.payload};
      case POST_POPULAR_DATA:
        return {...state, dataPostPopular: action.payload};
      case POST_POPULAR_All_DATA:
        return {...state, dataPostAllPopular: action.payload};
      case POST_DETAIL_DATA:
        return {...state, dataPostDetail: action.payload};
      default:
        return state;
    }
  };

export default NewsReducer;