import React, {useEffect} from "react";
import {Form, Input} from 'antd';

import "./home-page.scss"
import {Col, Container, Row} from "react-bootstrap";
import fi from "../../../../assets/images/icons/vendors/flip.png"
import {useUserContext} from "../../../providers/UserProvider";

export default function HomePage() {

    const {myState, setMyState} = useUserContext()
    useEffect(()=>{
        setMyState('transparent')
    })

    const onFinish = (values: any) => {
        console.log('Success:', values);
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
                                            // rules={[{ required: true, message: 'Please input your username!' }]}
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
                        <Col md={3}>
                            <div className={"vendor-box"}>
                                <img src={fi} className={'img-fluid'}/>
                                <h3>Flipkart</h3>
                                <p>Lorem Ipsum is simply dummy
                                    text of the printing and
                                    typesetting industry.</p>
                                <a href={""}>View Store</a>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className={"vendor-box"}>
                                <img src={fi} className={'img-fluid'}/>
                                <h3>Flipkart</h3>
                                <p>Lorem Ipsum is simply dummy
                                    text of the printing and
                                    typesetting industry.</p>
                                <a href={""}>View Store</a>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className={"vendor-box"}>
                                <img src={fi} className={'img-fluid'}/>
                                <h3>Flipkart</h3>
                                <p>Lorem Ipsum is simply dummy
                                    text of the printing and
                                    typesetting industry.</p>
                                <a href={""}>View Store</a>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className={"vendor-box"}>
                                <img src={fi} className={'img-fluid'}/>
                                <h3>Flipkart</h3>
                                <p>Lorem Ipsum is simply dummy
                                    text of the printing and
                                    typesetting industry.</p>
                                <a href={""}>View Store</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}