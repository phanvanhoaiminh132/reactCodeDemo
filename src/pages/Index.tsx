import { Outlet, Route, Routes} from "react-router-dom";
import ScrollTopButton from "../components/scroll-top-button/ScrollTopButton";
import Footer from "../layouts/footer/Footer";
import Header from "../layouts/header/Header";
import Home from "./home/Home";
import Category from "./category/Category";
import SingleNews from "./single-news/SingleNews";

const BasicLayout = () => {
    return (
      <>
        <Header/>
        <Outlet />
        <Footer />
        <ScrollTopButton />
      </>
    )
}

const Index = () =>{
    return(
        <Routes>
            <Route path="/" element={<BasicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/single-news" element={<SingleNews />} />
            </Route>
        </Routes>
    )
}

export default Index;