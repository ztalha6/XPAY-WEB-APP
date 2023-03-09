import React from "react"
import {Outlet} from "react-router";
import {Layout} from 'antd';
import Header from "../components/header/Header";

const { Footer, Sider, Content } = Layout;
export default function AuthLayout() {
    return(
        <>
            <>
                <Header/>
                <Content> <Outlet/></Content>
            </>
        </>
    )
}