import {Route, Routes} from "react-router-dom";
import ScrollTopButton from "../components/scroll-top-button/ScrollTopButton";
import Footer from "../layouts/footer/Footer";
import Header from "../layouts/header/Header";
import Home from "./home/Home";
import Category from "./category/Category";
import SingleNews from "./single-news/SingleNews";

const Index = () =>{
    return(
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/single-news" element={<SingleNews />} />
            </Routes>

            <Footer />
            <ScrollTopButton />
      </>
    )
}

export default Index;