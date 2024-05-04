import { Container, Row, Col } from "react-bootstrap";
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from "react-bootstrap-icons";
import { footerLink, categoryFooterTag } from "../../contant/Contant";
import TagList from "../../components/tag-list/TagList";
import LinkList from "../../components/link-list/LinkList";
import "./Footer.scss";

const Footer = () =>{
    return(
        <div id="footer">
            <Container fluid>
                <Row>
                    <Col lg={3} md={12}>
                        <img className="logo" src="/images/logo.png" alt="Logo_Web"></img>
                        <p className="title-footer">
                            Volup amet magna clita tempor. Tempor sea eos vero <br/>
                            ipsum. Lorem lorem sit sed elitr sed kasd et
                        </p>
                        <div className="list-social">
                            <div className="box-social"><Twitter/></div>
                            <div className="box-social"><Facebook/></div>
                            <div className="box-social"><Instagram/></div>
                            <div className="box-social"><Linkedin/></div>
                            <div className="box-social"><Youtube/></div>
                        </div>
                    </Col>
                    <Col lg={3} md={12}>
                        <TagList data={categoryFooterTag}/>
                    </Col>
                    <Col lg={3} md={12}>
                        <TagList data={categoryFooterTag}/>
                    </Col>
                    <Col lg={3} md={12}>
                        <LinkList {...footerLink}/>
                    </Col>
                </Row>
            </Container>
            <div className="footer-bottom">
                <span><span className="red">Your Site Name</span>. All Rights Reserved. Designed by <span className="red">HTML Codex</span></span>
            </div>
        </div>
    )
}

export default Footer;