import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import "./footer.scss";
import {Facebook, Linkedin, Pinterest, Twitter, Youtube} from "../../../assets/images/icons/social"
import logoB from "../../../assets/images/logo-black.png";

export default function Footer() {
    return(
        <>
            <div className={"app-footer"} >
                <Container>
                    <Row className={"footer-row-1 justify-content-between"}>
                        <Col md={4}>
                            <div className={"footer-logo"}>
                                <img src={logoB} className="img-fluid"/>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={"social-icons"}>
                                <ul>
                                    <li><a href={""}>{Facebook}</a></li>
                                    <li><a href={""}>{Twitter}</a></li>
                                    <li><a href={""}>{Linkedin}</a></li>
                                    <li><a href={""}>{Pinterest}</a></li>
                                    <li><a href={""}>{Youtube}</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <hr className={"hr"}/>
                    <Row className={"footer-contact"}>
                        <Col md={6} lg={4} xl={4} xxl={5}>
                            <div>
                                <h3>Connect With Us</h3>
                            </div>
                        </Col>
                        <Col md={6} lg={2} xl={2} xxl={2}>
                            <div>
                                <h4>Tel:</h4>
                                <p>(800) 362-9239</p>
                            </div>
                        </Col>
                        <Col md={6} lg={2} xl={2} xxl={2}>
                            <div>
                                <h4>Email:</h4>
                                <p>info@muhaymin.com</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} xl={4} xxl={3}>
                            <div>
                                <p>39899 Balentine Drive, Newark, CA 94560, United States</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"m-auto"} md={12}>
                            {/*<div className={"footer-row-1"}>*/}
                            {/*    <div className={"footer-logo"}>*/}
                            {/*        <img src={reduxTheme.logo} className="img-fluid"/>*/}
                            {/*    </div>*/}
                            {/*    <div className={"social-icons"}>*/}
                            {/*        <ul>*/}
                            {/*            <li><a href={""}>{Facebook}</a></li>*/}
                            {/*            <li><a href={""}>{Twitter}</a></li>*/}
                            {/*            <li><a href={""}>{Linkedin}</a></li>*/}
                            {/*            <li><a href={""}>{Pinterest}</a></li>*/}
                            {/*            <li><a href={""}>{Youtube}</a></li>*/}
                            {/*        </ul>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<hr className={"hr"}/>*/}
                            {/*<div className={"footer-contact"}>*/}
                            {/*    <div>*/}
                            {/*        <h3>Connect With Us</h3>*/}
                            {/*    </div>*/}
                            {/*    <div className={"contact-detail"}>*/}
                            {/*        <div>*/}
                            {/*            <h4>Tel:</h4>*/}
                            {/*            <p>(800) 362-9239</p>*/}
                            {/*        </div>*/}
                            {/*        <div>*/}
                            {/*            <h4>Email:</h4>*/}
                            {/*            <p>info@domain.com</p>*/}
                            {/*        </div>*/}
                            {/*        <div>*/}
                            {/*            <p>39899 Balentine Drive, Newark, CA 94560, United States</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={"app-footer-bottom"}>
                <Container className={"h-100"}>
                    <Row className={"h-100"}>
                        {/*<Col className={"m-auto"} md={12}>*/}
                        {/*    <div className={"footer-row-1"}>*/}
                        {/*        <div className={"copyright"}>*/}
                        {/*            <p>© 2022 ServeEasy Powered by <b>Revol Ventures</b></p>*/}
                        {/*        </div>*/}
                        {/*        <div className={"useful-links"}>*/}
                        {/*            <ul>*/}
                        {/*                <li><a href={"#"}>Terms & Conditions</a></li>*/}
                        {/*                <li><a href={"#"}>Privacy Policy</a></li>*/}
                        {/*            </ul>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</Col>*/}
                        <Col md={6}>
                            <div className={"copyright"}>
                                <p>© 2022 Muhaymin Powered by <b>Vitality</b></p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={"useful-links"}>
                                <ul>
                                    <li><a href={"#"}>Terms & Conditions</a></li>
                                    <li><a href={"#"}>Privacy Policy</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}