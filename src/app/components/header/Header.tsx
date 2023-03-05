import React, {useState} from 'react';
import type {MenuProps} from 'antd';
import {Col, Row} from 'antd';
import logo from "../../../assets/images/logo.png"
import {MailOutlined} from '@ant-design/icons';
import "./header.scss"
import {Link} from "react-router-dom";

export default function Header() {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items: MenuProps['items'] = [
        {
            label: 'Track',
            key: 'mail',
            icon: <MailOutlined />,
        },


        {
            label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
            ),
            key: 'alipay',
        },
    ];

    return(
        <header>
            <div className={'container'}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align={'middle'}>
                    <Col span={12}><img src={logo} className={'img-fluid'}/> </Col>
                    <Col span={12}>
                        <div className={"menu"}>
                            <ul>
                                <li>
                                    <Link to="/">Track</Link>
                                </li>
                                <li>
                                    <Link to="/about">Our Vendors</Link>
                                </li>
                                <li>
                                    <Link to="/contact">About us</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact us</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </header>
    )
}