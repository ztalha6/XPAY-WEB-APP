import React, {useEffect} from "react"
import {Col, Container, Row} from "react-bootstrap";
import "./track-order.scss"
import {useUserContext} from "../../../providers/UserProvider";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import {TbTruckDelivery} from "react-icons/tb"

export default function TrackOrder() {
    const {myState, setMyState} = useUserContext()
    useEffect(()=>{
        setMyState('fixed')
    })
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
                            <button className={'btn btn-dispute'}>Dispute</button>
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
                </Container>
            </div>
        </>
    )
}