import ScrollTopButton from "../components/scroll-top-button/ScrollTopButton";
import Footer from "../layouts/footer/Footer";
import Header from "../layouts/header/Header";
import Category from "./category/Category";
import Home from "./home/Home";
import SingleNews from "./single-news/SingleNews";

const Index = () =>{
    return(
        <>
            <Header/>
            {/* <Home/> */}
            {/* <Category/> */}
            <SingleNews />
            <Footer/>
            <ScrollTopButton />
        </>
    )

}

export default Index;