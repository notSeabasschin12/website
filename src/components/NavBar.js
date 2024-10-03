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

// const routerStyle = {
//     "width": "33vw",
//     "height": "10vh",
//     "paddingTop": "2.5vh",
//     "paddingLeft": "2.5vw"
// };
const RouterDiv = styled.div`
    width: 100%;
    height: 8vh;
    background-color: #58a4a7;
`

const linkStyle = {
    "textDecoration": "none",
    "padding-top": "2.5vh",
    "padding-right": "2.5vw",
    "font-family": "Gill Sans",
    "font-size": "18px",
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