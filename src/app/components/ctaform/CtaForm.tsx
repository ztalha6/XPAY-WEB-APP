import React, {useState} from "react";
import "./cra-form.scss"
import {Form, Input, RadioChangeEvent} from "antd";

export default function CtaForm() {
    const [value, setValue] = useState(1);
    const [formtype, setFormtype] = useState(true)
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
        if(e.target.value == 1){
            setFormtype(true)
        }
        else{
            setFormtype(false)
        }
    };
    return(
        <>
            <div className={"cta-form"}>
                <div className={"dfields"}>
                    {/*<div className={"mb-2"}>*/}
                    {/*    <Radio.Group defaultValue={1} onChange={onChange} value={value}>*/}
                    {/*        <Space direction="horizontal">*/}
                    {/*            <Radio value={1}><p>Email </p></Radio>*/}
                    {/*            <Radio value={2}><p>Phone </p></Radio>*/}
                    {/*        </Space>*/}
                    {/*    </Radio.Group>*/}
                    {/*</div>*/}

                    {/*{*/}
                    {/*    formtype ? (*/}
                    {/*        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>*/}
                    {/*            <Input />*/}
                    {/*        </Form.Item>*/}
                    {/*    ) : (*/}
                    {/*        <Form.Item name={'phone'} label="Phone" rules={[{ type: 'number' }]}>*/}
                    {/*            <Input />*/}
                    {/*        </Form.Item>*/}
                    {/*    )*/}
                    {/*}*/}
                    <Form layout={'vertical'}>
                        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                            <Input />
                        </Form.Item>
                    </Form>
                </div>
                <div className={"form-btn"}>
                    <button className={"btn btn-share"}>Share App Link</button>
                </div>
            </div>
        </>
    )
}