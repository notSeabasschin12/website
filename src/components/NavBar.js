import * as React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Home from "../pages/home.js"
import Blog from "../pages/blog.js"
import Projects from "../pages/projects.js"
import styled from 'styled-components'

const RouterDiv = styled.div`
    width: 100%;
    height: 10vh;
    background-color: #93c4c5;
`

const linkStyle = {
    "textDecoration": "none",
    "padding-top": "3vh",
    "padding-right": "2.5vw",
    "font-family": "Gill Sans",
    "font-size": "2.5vh",
    "float": "right",
    "color": "gray"
};

export default function NavBar() {
    return (
        <Router>
            <RouterDiv>
                <Link to="/blog" style={linkStyle}>Blog</Link>
                <Link to="/projects" style={linkStyle}>Projects</Link>
                <Link to="/" style={linkStyle}>Home</Link>
            </RouterDiv>
            <Routes>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
}