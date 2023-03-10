import React, {useEffect, useState} from "react"
import {Col, Container, Row} from "react-bootstrap";
import {useUserContext} from "../../../providers/UserProvider";
import check from "../../../../assets/images/check.png"
import {useNavigate, useParams} from "react-router-dom";
import {DisputeService} from "../../../services/api-services/dispute.service";
import {IDisputeListing} from "../../../interfaces/IDispute";
import {IPaymentOrderItem} from "../../../interfaces/IPayment";

export default function DisputePlaced() {
    const navigate = useNavigate();
    const {myState, setMyState} = useUserContext()
    const [singleDispute, setSingleDispute] = useState<IDisputeListing>()

    const {id} = useParams()


    const getSingleDispute = async () => {
        const res = await DisputeService.getById(id)
        if(res.status) {
            setSingleDispute(res.data)
        }
    }

    useEffect(()=>{
        setMyState('fixed')
        getSingleDispute()
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
                                Order #{singleDispute?.id}
                            </p>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={"thankyou-box"}>
                            <div className={"order-details"}>
                                <h3>Order details</h3>
                                <p>Order number:<span>{singleDispute?.id}</span></p>
                                <p>Vendor:<span>{singleDispute?.payment.vendor_business_detail.business_name}</span></p>
                                <p>Date:<span>{singleDispute?.created_ago}</span></p>
                                <p>Payment method:<span>Visa</span></p>
                            </div>
                            <div className={"cart-details"}>
                                <ul>
                                    <li>
                                        <div className={"cart"}>
                                            <ul>
                                                {singleDispute?.payment?.payment_order_items.map((paymentOrderItem:IPaymentOrderItem) => {
                                                    return (
                                                        <li className={"cart-item"}>
                                                            <div className={"cart-col-1"}>
                                                                <div className={"cart-img"}>
                                                                    <img src={'https://placehold.co/80x80'} className={"img-fluid"}/>
                                                                </div>
                                                                <div className={"cart-detail"}>
                                                                    <h4>{paymentOrderItem.name}</h4>
                                                                    <ul>
                                                                        <li>Space Gray</li>
                                                                        <li>32GB</li>
                                                                        <li>1 TB</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className={"cart-price"}>
                                                                    <h4>${paymentOrderItem.price}</h4>
                                                                    <p>Qty: {paymentOrderItem.qty}</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
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