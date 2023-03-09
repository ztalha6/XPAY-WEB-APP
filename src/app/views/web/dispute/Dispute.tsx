import React, {useEffect, useState} from "react"
import {Col, Container, Row} from "react-bootstrap";
import {useUserContext} from "../../../providers/UserProvider";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import {Button, Form, Input, Upload} from "antd";
import {UploadOutlined} from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
import "./dispute.scss"
import ThemeModal from "../../../components/modal/Modal";
import Verification from "../verification/Verification";


export default function Dispute() {
    const[open, setOpen] = useState<boolean>(false);
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
    // const normFile = (e:any) => {
    //     if (Array.isArray(e)) {
    //         return e;
    //     }
    //     return e && e.file;
    // };
    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
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
                        <p>Create your account, It takes less than a minutes. Enter your personal info.</p>
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
                                    {/*<Form.Item*/}
                                    {/*    name="image"*/}
                                    {/*    label={'Uplaod Image'}*/}
                                    {/*    getValueFromEvent={normFile}*/}
                                    {/*    rules={[*/}
                                    {/*        {*/}
                                    {/*            required: true,*/}
                                    {/*            message: 'Please upload an image',*/}
                                    {/*        },*/}
                                    {/*    ]}*/}
                                    {/*    // rules={[{ required: true, message: 'Phone Required' }]}*/}
                                    {/*>*/}

                                    {/*    <ImageUpload/>*/}
                                    {/*</Form.Item>*/}
                                    <Form.Item
                                        name="upload"
                                        label="Upload Image"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                        rules={[
                                                {
                                                    required: true,
                                                    message: 'Please upload an image',
                                                },
                                            ]}
                                    >
                                        <Upload name="logo" listType="picture">
                                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                                        </Upload>
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item name={'instruction'} label="TextArea">
                                        <TextArea rows={4} />
                                    </Form.Item>
                                </Col>
                            </Row>



                                {/*<Form.Item>*/}
                                {/*    <Button type="primary" htmlType="submit">*/}
                                {/*        Submit*/}
                                {/*    </Button>*/}
                                {/*</Form.Item>*/}
                            <button type={"submit"} className={'btn btn-dispute'}>Place Dispute</button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}