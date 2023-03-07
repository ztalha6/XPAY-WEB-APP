import React, {useEffect} from "react"
import {Col, Container, Row} from "react-bootstrap";
import "./track-order.scss"
import {useUserContext} from "../../../providers/UserProvider";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import {TbTruckDelivery} from "react-icons/tb"
import {FaCcVisa} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';

export default function TrackOrder() {
    const {myState, setMyState} = useUserContext()
    const navigate = useNavigate();
    useEffect(()=>{
        setMyState('fixed')
    })

    function DisputePage() {
        navigate('/dispute');
    }
    return(
        <>
            <div className={"track-order"}>
                <Container>
                    <Row>
                        <Col>
                            <BreadCrumb/>
                        </Col>
                    </Row>
                    <Row className={"justify-content-between"}>
                        <Col>
                            <h4 className={'order-id'}>Order ID: 3354654654526</h4>
                        </Col>
                        <Col className={'d-flex justify-content-end align-items-center'}>
                            <button className={'btn btn-dispute'} onClick={DisputePage}>Dispute</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={"order-detail"}>
                                <ul>
                                    <li><h4>Order date:</h4> <p>Feb 28, 2023</p></li>
                                    <li><h6><TbTruckDelivery/>Estimated delivery: Mar 03, 2023</h6></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={"cart"}>
                                <ul>
                                    <li className={"cart-item"}>
                                        <div className={"cart-col-1"}>
                                            <div className={"cart-img"}>
                                                <img src={'https://placehold.co/80x80'} className={"img-fluid"}/>
                                            </div>
                                            <div className={"cart-detail"}>
                                                <h4>MackBook Pro 14</h4>
                                                <ul>
                                                    <li>Space Gray</li>
                                                    <li>32GB</li>
                                                    <li>1 TB</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={"cart-price"}>
                                                <h4>$2599.00</h4>
                                                <p>Qty: 1</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={"cart-item"}>
                                        <div className={"cart-col-1"}>
                                            <div className={"cart-img"}>
                                                <img src={'https://placehold.co/80x80'} className={"img-fluid"}/>
                                            </div>
                                            <div className={"cart-detail"}>
                                                <h4>MackBook Pro 14</h4>
                                                <ul>
                                                    <li>Space Gray</li>
                                                    <li>32GB</li>
                                                    <li>1 TB</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={"cart-price"}>
                                                <h4>$2599.00</h4>
                                                <p>Qty: 1</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={"cart-item"}>
                                        <div className={"cart-col-1"}>
                                            <div className={"cart-img"}>
                                                <img src={'https://placehold.co/80x80'} className={"img-fluid"}/>
                                            </div>
                                            <div className={"cart-detail"}>
                                                <h4>MackBook Pro 14</h4>
                                                <ul>
                                                    <li>Space Gray</li>
                                                    <li>32GB</li>
                                                    <li>1 TB</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={"cart-price"}>
                                                <h4>$2599.00</h4>
                                                <p>Qty: 1</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={"order-payment"}>
                                <h4>Payment</h4>
                                <p>Visa **56 <FaCcVisa/></p>
                            </div>
                        </Col>
                        <Col>
                            <div className={"order-summary"}>
                                <h4>Order Summary</h4>
                                <ul>
                                    <li>
                                        <span>Delivery</span>
                                        <span>$10.00</span>
                                    </li>
                                    <li>
                                        <span>Tax</span>
                                        <span>+$9.88</span>
                                    </li>
                                </ul>
                                <p>Total <span>$2599.00</span></p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}