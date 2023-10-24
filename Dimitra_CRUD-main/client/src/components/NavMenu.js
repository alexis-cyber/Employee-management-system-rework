import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../img/logo (2).png';
import { FaHome, FaRegAddressCard } from 'react-icons/fa';
import { RiInformationLine, RiLoginCircleLine } from 'react-icons/ri';

const NavMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <Image src={logo} width={'50px'} />
        </Navbar.Brand>
        <Navbar.Brand href="/">Employee Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/">
              <FaHome className="me-1" />
              Home
            </Nav.Link>
            <Nav.Link href="/employee/create">
              <FaRegAddressCard className="me-1" />
              Add Employee
            </Nav.Link>
            <Nav.Link href="/employees">
              <RiInformationLine className="me-1" />
              Employee Information
            </Nav.Link>
            <Nav.Link href="/login">
              <RiLoginCircleLine className="me-1" />
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
