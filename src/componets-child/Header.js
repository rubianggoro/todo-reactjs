import React from 'react'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
             <h1>My TODO LIST</h1>
             <Nav className="justify-content-center" >
                <Nav.Item className="mr-5">
                    <Link to="/classbase">Class Base</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/functionbase">Function Base</Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default Header;
