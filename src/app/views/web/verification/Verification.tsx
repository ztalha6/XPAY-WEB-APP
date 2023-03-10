import React, {Dispatch, SetStateAction} from 'react';
import {Button, Form} from 'antd';
import OtpInput from 'react-otp-input';
import {DisputeService} from "../../../services/api-services/dispute.service";
import {useNavigate} from "react-router-dom";

const OtpForm = ({setOpen, guestUserId,paymentId}: {
    setOpen: Dispatch<SetStateAction<boolean>>,
    guestUserId: number,paymentId:number}) => {
    const [otp, setOtp] = React.useState('');
    const navigator = useNavigate()


    const handleChange = (value:any) => {
        setOtp(value);
    };

    const onFinish = async (values:{otp: string}) => {
        console.log('Received values of form:', values);
        const data = {
            code: values.otp,
            guest_user_id: guestUserId
        }
        const res = await DisputeService.verifyGuestUser(data)
        if(res.status){
            setOpen(false)
            navigator(  `/dispute/${paymentId}`)
        }
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
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default OtpForm;