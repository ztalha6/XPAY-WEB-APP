import React, {useEffect, useState} from "react"
import {Col, Container, Row} from "react-bootstrap";
import "./track-order.scss"
import {useUserContext} from "../../../providers/UserProvider";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import {TbTruckDelivery} from "react-icons/tb"
import {FaCcVisa} from "react-icons/fa";
import {useNavigate, useParams} from 'react-router-dom';
import {PaymentServices} from "../../../services/api-services/payment.service";
import {IPaymentListing, IPaymentOrderItem} from "../../../interfaces/IPayment";
import ThemeModal from "../../../components/modal/Modal";
import Verification from "../verification/Verification";
import {DisputeService} from "../../../services/api-services/dispute.service";

export default function TrackOrder() {
    const[open, setOpen] = useState<boolean>(false);
    const {myState, setMyState} = useUserContext()
    const navigate = useNavigate();
    const [singlePayment, setSinglePayment] = useState<IPaymentListing>()

    const {id} = useParams()


    const getPayment = async () => {
        const res = await PaymentServices.getById(id)
        if(res.status) {
            setSinglePayment(res.data)
        }
    }

    useEffect(()=>{
        setMyState('fixed')
        getPayment() 
    },[])


    const DisputePage = async () => {
        if(singlePayment?.id) {
            const data = {
                transaction_id: singlePayment.id
            }
            const res = await DisputeService.sendGuestVerificationCode(data)
            if(res.status){
                setOpen(true)
            }
        }
        // navigate('/dispute');
    }

    return(
        <>
            <ThemeModal
                active={open}
                setActive={setOpen}
                width={750}
                children={
                    <Verification setOpen={setOpen}
                                  guestUserId={singlePayment?.guest_user_id || 0} paymentId={singlePayment?.id || 0}/>
                }
            />
            <div className={"track-order"}>
                <Container>
                    <Row>
                        <Col>
                            <BreadCrumb/>
                        </Col>
                    </Row>
                    <Row className={"justify-content-between"}>
                        <Col>
                            <h4 className={'order-id'}>Order ID: {singlePayment?.id}</h4>
                        </Col>
                        <Col className={'d-flex justify-content-end align-items-center'}>
                            {singlePayment ? <button className={'btn btn-dispute'} >View Dispute</button> : <button className={'btn btn-dispute'} onClick={DisputePage}>Dispute</button>}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={"order-detail"}>
                                <ul>
                                    <li><h4>Order date:</h4> <p>Mar 10, 2023</p></li>
                                    <li><h6><TbTruckDelivery/>Estimated delivery: Mar 12, 2023</h6></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={"cart"}>
                                <ul>
                                    {singlePayment?.payment_order_items.map((paymentOrderItem: IPaymentOrderItem)=> {
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
                                                        <h4>{paymentOrderItem.price}</h4>
                                                        <p>Qty: {paymentOrderItem.qty}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
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
                                <p>Total <span>${singlePayment?.amount}</span></p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}