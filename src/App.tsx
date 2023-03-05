import React from 'react';
import './App.css';
import RouteConfig from "./app/utils/RouterConfig";
import {BrowserRouter} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "../src/assets/css/default.scss"
import "../src/assets/css/colors.scss"

function App() {
    return (
        <BrowserRouter>
            <RouteConfig/>
        </BrowserRouter>
    );
}

export default App;
