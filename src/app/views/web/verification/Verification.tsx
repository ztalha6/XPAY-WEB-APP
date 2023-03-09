import React from 'react';
import {Button, Form} from 'antd';
import OtpInput from 'react-otp-input';

const OtpForm = () => {
    const [otp, setOtp] = React.useState('');

    const handleChange = (value:any) => {
        setOtp(value);
    };

    const onFinish = (values:any) => {
        console.log('Received values of form:', values);
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
                    { len: 6, message: 'OTP must be 6 digits long!' },
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