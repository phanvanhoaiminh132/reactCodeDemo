import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Search, ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { Link, useLocation  } from "react-router-dom";
import moment from 'moment';
import React from "react";
import "./Header.scss";

const Header = React.memo(() =>{
    const location = useLocation(); 
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    return(
        <div id="header">
             <Navbar className="bg-body-tertiary">
                <Container fluid>
                    <div className="top-header">
                        <div className="top-header-left">
                            <span className="top-title">Tranding</span>
                            <Swiper
                                className="header-swiper"
                                modules={[Navigation, Scrollbar, Autoplay]}
                                navigation={{
                                    prevEl: navigationPrevRef.current,
                                    nextEl: navigationNextRef.current,
                                }}
                                onBeforeInit={(swiper:any) => {
                                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                                    swiper.params.navigation.nextEl = navigationNextRef.current;
                                }}
                                loop={true}
                                slidesPerView={1}
                                speed={1200}
                            >
                                <SwiperSlide>Labore sit justo amet eos sed, et sanctus dolor diam eos Labore sit justo amet eos sed</SwiperSlide>
                                <SwiperSlide>Labore sit justo amet eos sed, et sanctus dolor diam eos</SwiperSlide>
                                <SwiperSlide>Labore sit justo amet eos sed, et sanctus dolor diam eos</SwiperSlide>
                            </Swiper>

                            <div className="pre arrow" ref={navigationPrevRef}><ChevronLeft/></div>
                            <div className="next arrow" ref={navigationNextRef} ><ChevronRight/></div>
                        </div>
                        <span className="top-header-right">{moment().format('dddd, MMMM DD, YYYY')}</span>
                    </div>
                </Container>
            </Navbar>

            <Container fluid>
                <div className="center-header">
                    <Navbar.Brand as={Link} to="/">
                        <img className="logo" src="/images/logo.png" alt="Logo_Web"></img>
                    </Navbar.Brand>
                    <img className="code-img" src="/images/img-center-header.png" alt="code-img"></img>
                </div>
            </Container>
            
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" className="logo-mobile">
                        <img className="logo" src="/images/logo.png" alt="Logo_Web"></img>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className={`nav-link ${location.pathname === "/category" ? "active" : ""}`} as={Link} to="/category">Category</Nav.Link>
                            <Nav.Link className={`nav-link ${location.pathname === "/single-news" ? "active" : ""}`} as={Link} to="/single-news">Single News</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item>Dropdown1</NavDropdown.Item>
                                <NavDropdown.Item>Dropdown2</NavDropdown.Item>
                                <NavDropdown.Item>Dropdown3</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav>

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Keyword"
                                aria-label="Keyword"
                            />
                            <Button className="button-search" variant="outline-success">
                                <Search/>
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
})

export default Header;