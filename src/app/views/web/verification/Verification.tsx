import React, {Dispatch, SetStateAction, useState} from 'react';
import {Button, Form, Spin} from 'antd';
import OtpInput from 'react-otp-input';
import {DisputeService} from "../../../services/api-services/dispute.service";
import {useNavigate} from "react-router-dom";
import {LoadingOutlined} from '@ant-design/icons';

const OtpForm = ({setOpen, guestUserId,paymentId}: {

    setOpen: Dispatch<SetStateAction<boolean>>,
    guestUserId: number,paymentId:number}) => {
    const [otp, setOtp] = React.useState('');
    const navigator = useNavigate()
    const antIcon = <LoadingOutlined style={{ fontSize: 24 ,color:'white' }} spin />;
    const [loading,setLoading] = useState<boolean>(false)

    const handleChange = (value:any) => {
        setOtp(value);
    };

    const onFinish = async (values:{otp: string}) => {
        console.log('Received values of form:', values);
        setLoading(true)

        const data = {
            code: values.otp,
            guest_user_id: guestUserId
        }
        const res = await DisputeService.verifyGuestUser(data)
        if(res.status){
            setOpen(false)
            navigator(  `/dispute/${paymentId}`)
        }
        setLoading(false)
    };

    return (
        <Form
            name="otp_form"
            onFinish={onFinish}
        >
            <Form.Item
                name="otp"
                rules={[
                    { required: true, message: 'Please input your OTP!' },
                    { len: 4, message: 'OTP must be 4 digits long!' },
                ]}
            >
                <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={4}
                    separator={<span>-</span>}
                    isInputNum
                    inputStyle={{ width: '3rem', height: '3rem' }}
                />
            </Form.Item>

            <Form.Item>
                {loading ? <Button type="primary" >
                    <Spin indicator={antIcon} />
                </Button> : <Button type="primary" htmlType="submit">
                    Submit
                </Button>}
            </Form.Item>
        </Form>
    );
};

export default OtpForm;