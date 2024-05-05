export interface tagType {
    title: string,
    tags: string[]
}

export interface linkType {
    title: string,
    links: string[]
}

export interface categoryTagType {
    title: string;
    isShowViewAll: boolean;
}

export interface tagListType {
    data: tagType,
    styleSiderBar?: boolean 
}

export interface articlesType {
    source:{
        id: string,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
}

export interface businessType {
    status: string,
    totalResults: number,
    articles: articlesType[] | []
}

export interface dataPostAllPopularType{
    data:articlesType[] | [],
    countData: number
}

export interface initStateType {
    dataBusiness: articlesType[] | [],
    dataTechnology: articlesType[] | [],
    dataEntertainment: articlesType[] | [],
    dataSports: articlesType[] | [],
    dataFeatured: articlesType[] | [],
    dataCategory: articlesType[] | [],
    dataPopular: articlesType[] | [],
    dataPostPopular: articlesType[] | [],
    dataPostAllPopular: dataPostAllPopularType,
    dataPostDetail: articlesType[]
}

export interface propsValueSlider{
    dataValue: articlesType[], 
    title: string
}