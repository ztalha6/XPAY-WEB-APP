import React from 'react';
import './App.css';
import RouteConfig from "./app/utils/RouterConfig";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "bootstrap/dist/css/bootstrap.min.css";

import "../src/assets/css/default.scss"
import "../src/assets/css/colors.scss"

function App() {
    return (
        <div className="App">

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <BrowserRouter>
                <RouteConfig/>
            </BrowserRouter>
        </div>
    );
}

export default App;
