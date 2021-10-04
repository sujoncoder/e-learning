import React from 'react';
import { Navbar,Container,Nav,Stack,Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">E-Learning</Navbar.Brand>
            <Nav className="me-auto">

            <Stack direction="horizontal" gap={5}>
            <NavLink
            to="/home"
            activeStyle={{
            fontWeight: "bold",
            color: "red"
            }}
            >
            HOME
            </NavLink>
           
           <NavLink
            to="/about"
            activeStyle={{
            fontWeight: "bold",
            color: "red"
            }}
            >
            ABOUT
            </NavLink>
           
            <NavLink
            to="/services"
            activeStyle={{
            fontWeight: "bold",
            color: "red"
            }}
            >
            SERVICES
            </NavLink>
           
            <NavLink
            to="/instructor"
            activeStyle={{
            fontWeight: "bold",
            color: "red"
            }}
            >
            INSTRUCTOR
            </NavLink>
            </Stack>
            </Nav>
            </Container>
        </Navbar>
        <div className="header">
           <div className="header-title">
            <h4>Popular Online Course.</h4>
            <h1>The New Way To Learn Properly In With Us.</h1>
            <Button variant="warning">GET START</Button>{' '}
           </div>

        </div>
        </div>
    );
};

export default Header;