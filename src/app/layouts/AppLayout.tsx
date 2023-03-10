import React from "react"
import {Outlet} from "react-router";
import {Layout} from 'antd';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const { Sider, Content } = Layout;
export default function AppLayout() {
    return(
        <>
            <>
                <Header/>
                <Content> <Outlet/></Content>
                <Footer/>
            </>
        </>
    )
}