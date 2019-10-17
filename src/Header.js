import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/header.css'
const Header = () =>{
    return (
        <header>
            <div>
                {/* <div className="logo"></div> */}
                <img src="" alt=""/>
                <Link to="/">首页</Link>
                <Link to="/blongs">专栏</Link>
                <Link to="/questions">问答</Link>
            </div>
        </header>
    )
}
export default Header



