import React, {useEffect} from "react"
import {Col, Container, Row} from "react-bootstrap";
import {useUserContext} from "../../../providers/UserProvider";
import check from "../../../../assets/images/check.png"
import {useNavigate} from "react-router-dom";

export default function DisputePlaced() {
    const navigate = useNavigate();
    const {myState, setMyState} = useUserContext()
    useEffect(()=>{
        setMyState('fixed')
    },[])
    function homePage() {
        navigate('/');
    }
    return(
        <div className={"dispute-placed"}>
            <Container>
                <Row>
                    <Col className={"text-center"} md={12}>
                        <div className={"dispute-box"}>
                            <img src={check} className={'img-fluid'}/>
                            <h3>Dispute Placed!</h3>
                            <p>Your dispute has been placed against
                                Order #234
                            </p>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={"thankyou-box"}>
                            <div className={"order-details"}>
                                <h3>Order details</h3>
                                <p>Order number:<span>asdasd</span></p>
                                <p>Vendor:<span>Serveeasy</span></p>
                                <p>Date:<span>time </span></p>
                                <p>Payment method:<span>asdasd</span></p>
                            </div>
                            <div className={"cart-details"}>
                                <ul>
                                    <li>
                                        <div className={"cart"}>
                                            <ul>
                                                <li className={"cart-item"}>
                                                    <div className={"cart-col-1"}>
                                                        <div className={"cart-img"}>
                                                            <img src={'https://placehold.co/80x80'} className={"img-fluid"}/>
                                                        </div>
                                                        <div className={"cart-detail"}>
                                                            <h4>Macbook Pro</h4>
                                                            <ul>
                                                                <li>Space Gray</li>
                                                                <li>32GB</li>
                                                                <li>1 TB</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className={"cart-price"}>
                                                            <h4>$55</h4>
                                                            <p>Qty: 1</p>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className={"btn-sec"}>
                                <button onClick={homePage} className={"btn btn-home"}>Back to homepage</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}