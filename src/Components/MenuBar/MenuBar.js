import React, { useContext } from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';





const MenuBar = () => {
    const [user, setUser] = useContext(userContext);
    const loginStyle = {
        backgroundColor: '#96e1f5',
        borderRadius: '5px',
        padding: '8px 18px'
    }
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/home">Riding Lover</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/login" style={loginStyle}>Login</Nav.Link>
                    <Nav.Link>{user.name}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MenuBar;