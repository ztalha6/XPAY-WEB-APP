import React, {useEffect, useState} from "react";
import {Form, Input} from 'antd';

import "./home-page.scss"
import {Col, Container, Row} from "react-bootstrap";
import fi from "../../../../assets/images/icons/vendors/flip.png"
import {useUserContext} from "../../../providers/UserProvider";
import {ITrackPayment, IVendorBusinessDetail} from "../../../interfaces/IPayment";
import {PaymentServices} from "../../../services/api-services/payment.service";
import {useNavigate} from "react-router-dom";
import {IntegratedBusinessService} from "../../../services/api-services/integrated-business.service";

export default function HomePage() {

    const {myState, setMyState} = useUserContext()
    const navigator = useNavigate()
    const [integratedBusinesses, setIntegratedBusinesses] = useState<IVendorBusinessDetail[]>([])



    const getIntegratedBusiness = async () => {
        const res = await IntegratedBusinessService.all()
        if(res.status) {
            setIntegratedBusinesses(res.data)
        }
    }


    useEffect(()=>{
        setMyState('transparent')
        getIntegratedBusiness()
    },[])

    const onFinish = async (values: ITrackPayment) => {
        console.log('Success:', values);
        const res = await PaymentServices.getById(values.track_num)
        if(res.status) {
            navigator(  `/track-order/${res.data.id}`)
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return(
        <div className={"home"}>
            <div className={'home-banner'}>
                <Container className={"h-100"}>
                    <Row className={"h-100"}>
                        <Col className={"m-auto"}>
                            <div className={"search-field"}>
                                <Form
                                    name="basic"
                                    // labelCol={{ span: 8 }}
                                    // wrapperCol={{ span: 16 }}
                                    // style={{ maxWidth: 600 }}
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <div className={'search-box'}>
                                        <Form.Item
                                            name="track_num"
                                            rules={[{ required: true, message: 'Please input order tracking number!' }]}
                                        >
                                            <Input placeholder={'track your order number'} />
                                        </Form.Item>
                                        {/*<Form.Item>*/}
                                        {/*    <Button type="primary" htmlType="submit">*/}
                                        {/*        Submit*/}
                                        {/*    </Button>*/}
                                        {/*</Form.Item>*/}
                                        <button type={"submit"} className={'btn btn-search'}>Track</button>
                                    </div>
                                </Form>
                            </div>
                            <div className={"affix"}>
                                <p>Separate multiple tracking numbers with a space or comma.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={'vendor-section'}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h4>Vendors</h4>
                            <h2>Our Vendors</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. </p>
                        </Col>
                    </Row>
                    <Row className={"mt-5"}>
                        {integratedBusinesses.map((integratedBusiness: IVendorBusinessDetail)=> {
                            return (
                                <Col md={3}>
                                    <div className={"vendor-box"}>
                                        <img src={integratedBusiness?.user_business_image?.mediaUrl||fi} className={'img-fluid'}/>
                                        <h3>{integratedBusiness.business_name}</h3>
                                        <p>Lorem Ipsum is simply dummy
                                            text of the printing and
                                            typesetting industry.</p>
                                        <a href={integratedBusiness.website_url} target={'_blank'}>View Store</a>
                                    </div>
                                </Col>
                            )
                        })}
                        {/*<Col md={3}>*/}
                        {/*    <div className={"vendor-box"}>*/}
                        {/*        <img src={fi} className={'img-fluid'}/>*/}
                        {/*        <h3>Flipkart</h3>*/}
                        {/*        <p>Lorem Ipsum is simply dummy*/}
                        {/*            text of the printing and*/}
                        {/*            typesetting industry.</p>*/}
                        {/*        <a href={""}>View Store</a>*/}
                        {/*    </div>*/}
                        {/*</Col>*/}
                        {/*<Col md={3}>*/}
                        {/*    <div className={"vendor-box"}>*/}
                        {/*        <img src={fi} className={'img-fluid'}/>*/}
                        {/*        <h3>Flipkart</h3>*/}
                        {/*        <p>Lorem Ipsum is simply dummy*/}
                        {/*            text of the printing and*/}
                        {/*            typesetting industry.</p>*/}
                        {/*        <a href={""}>View Store</a>*/}
                        {/*    </div>*/}
                        {/*</Col>*/}
                        {/*<Col md={3}>*/}
                        {/*    <div className={"vendor-box"}>*/}
                        {/*        <img src={fi} className={'img-fluid'}/>*/}
                        {/*        <h3>Flipkart</h3>*/}
                        {/*        <p>Lorem Ipsum is simply dummy*/}
                        {/*            text of the printing and*/}
                        {/*            typesetting industry.</p>*/}
                        {/*        <a href={""}>View Store</a>*/}
                        {/*    </div>*/}
                        {/*</Col>*/}
                    </Row>
                </Container>
            </div>
        </div>
    )
}