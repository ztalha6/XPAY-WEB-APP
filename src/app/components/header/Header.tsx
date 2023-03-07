import React, {useState} from 'react';
import {Col, Row} from 'antd';
import logo from "../../../assets/images/logo.png"
import logoB from "../../../assets/images/logo-black.png"
import "./header.scss"
import {Link} from "react-router-dom";
import {useUserContext} from "../../providers/UserProvider";

export default function Header() {
    const {myState} = useUserContext()
    const [current, setCurrent] = useState('mail');

    return(
        <header className={myState}>
            <div className={'container'}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align={'middle'}>
                    <Col span={12}>
                        {myState == 'fixed' ?  <img src={logoB} className={'img-fluid'}/>  :  <img src={logo} className={'img-fluid'}/>   }
                    </Col>
                    <Col span={12}>
                        <div className={"menu"}>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/track-order">Track</Link>
                                </li>
                                <li>
                                    <Link to="/dispute">Our Vendors</Link>
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