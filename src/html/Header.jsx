import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const Header = () =>{
	return(
		<>
		  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
			  <Navbar.Brand>TRACKER</Navbar.Brand>
			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
			    <Nav className="mr-auto">
			      <Nav.Link><NavLink to='/' >Home</NavLink></Nav.Link>
			      <Nav.Link><NavLink to='/statewise' >Covid19</NavLink></Nav.Link>
			      <Nav.Link><NavLink to="/vaccination" >Vaccination</NavLink></Nav.Link>
			      <NavDropdown title="About Us" id="collasible-nav-dropdown">
			        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.3">T&C</NavDropdown.Item>
			        <NavDropdown.Divider />
			        <NavDropdown.Item><NavLink to='/about' >About Us</NavLink></NavDropdown.Item>
			      </NavDropdown>
			    </Nav>
			     <Nav>
			      <Nav.Link href="#deets">demo</Nav.Link>
			      <Nav.Link eventKey={2} href="#memes">
			        Edemo
			      </Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		</>
		);
}

export default Header;