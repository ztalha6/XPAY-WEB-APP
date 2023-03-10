import React, {useEffect, useState} from "react"
import {Col, Container, Row} from "react-bootstrap";
import {useUserContext} from "../../../providers/UserProvider";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import {Form, Input, Spin} from "antd";
import TextArea from "antd/es/input/TextArea";
import "./dispute.scss"
import ImageUpload from "../../../components/ImageUpload";
import {useNavigate, useParams} from "react-router-dom";
import {DisputeService} from "../../../services/api-services/dispute.service";
import {LoadingOutlined} from '@ant-design/icons';

export default function Dispute() {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 ,color:'white' }} spin />;
    const [loading,setLoading] = useState<boolean>(false)
    const[open, setOpen] = useState<boolean>(false);
    const {myState, setMyState} = useUserContext()
    const [media,setMedia] = useState<{path: string}[]>([])
    const {id} = useParams()
    const navigator = useNavigate()

    useEffect(()=>{
        setMyState('fixed')
    })
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        if(id) {
            setLoading(true)
            const data = {
                payment_id : id,
                comments: values.comments,
                dispute_media: media.map((data:{path: string})=> {
                    return (
                        {
                            type: 'image',
                            path: data.path
                        }
                    )
                })
            }
            const res = await DisputeService.openDispute(data)
            if(res.status) {
                navigator(  `/dispute-placed/${res.data.id}`)
            }
            setLoading(false)

        }
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
                                        ]}
                                    >
                                        {/*<Upload name="logo" listType="picture">*/}
                                        {/*    <Button icon={<UploadOutlined />}>Click to upload</Button>*/}
                                        {/*</Upload>*/}
                                        <ImageUpload maxCount={3} setValue={setMedia} fieldName={"media"} aspect={1567/443}  getValues={media} />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item name={'comments'} label="Comments">
                                        <TextArea rows={4} />
                                    </Form.Item>
                                </Col>
                            </Row>



                            {/*<Form.Item>*/}
                            {/*    <Button type="primary" htmlType="submit">*/}
                            {/*        Submit*/}
                            {/*    </Button>*/}
                            {/*</Form.Item>*/}
                            {loading ?  <button className={'btn btn-dispute'}><Spin indicator={antIcon} /></button> :  <button type={"submit"} className={'btn btn-dispute'}>Place Dispute</button> }

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}