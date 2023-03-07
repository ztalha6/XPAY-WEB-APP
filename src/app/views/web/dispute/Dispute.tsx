import React, {useEffect} from "react"
import {Col, Container, Row} from "react-bootstrap";
import {useUserContext} from "../../../providers/UserProvider";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import {Form, Input} from "antd";
import ImageUpload from "../../../components/fields/image-upload/ImageUpload";

export default function Dispute() {
    const {myState, setMyState} = useUserContext()
    useEffect(()=>{
        setMyState('fixed')
    })
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return(
        <div className={"dispute"}>
            <Container>
                <Row>
                    <Col>
                        <BreadCrumb/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <h2>Dispute</h2>
                        <Form
                            name="dispute"
                            layout="vertical"
                            // labelCol={{ span: 8 }}
                            // wrapperCol={{ span: 16 }}
                            // style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Row>
                                <Col md={12}>
                                    <Form.Item
                                        name="name"
                                        label={'Full Name'}
                                        rules={[{ required: true, message: 'Username Required' }]}
                                    >
                                        <Input placeholder={'Full Name'} />
                                    </Form.Item>
                                </Col>
                                <Col md={12}>
                                    <Form.Item
                                        name="phone"
                                        label={'Mobile Number'}
                                        rules={[{ required: true, message: 'Phone Required' }]}
                                    >
                                        <Input placeholder={'123 456 7890'} />
                                    </Form.Item>
                                </Col>
                                <Col md={12}>
                                    <Form.Item
                                        name="image"
                                        label={'Uplaod Image'}
                                        // rules={[{ required: true, message: 'Phone Required' }]}
                                    >
                                        <ImageUpload/>
                                    </Form.Item>
                                </Col>
                            </Row>

                                {/*<Form.Item>*/}
                                {/*    <Button type="primary" htmlType="submit">*/}
                                {/*        Submit*/}
                                {/*    </Button>*/}
                                {/*</Form.Item>*/}
                            <button type={"submit"} className={'btn btn-search'}>Submit</button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}