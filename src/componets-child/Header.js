import React from 'react'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
             <Nav className="justify-content-center bg-dark py-3" >
                <Nav.Item className="mr-5">
                    <Link to="/" className="text-white">ClASS BASED</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/functionbase" className="text-white">FUNCTION BASED</Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default Header;
