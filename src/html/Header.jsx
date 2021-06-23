import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import '../App.css';


const Header = () =>{
	return(
		<>
		  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
			  <Navbar.Brand style={{ marginTop: -8, color: '#11FC7F'}}>TRACKER</Navbar.Brand>
			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
			    <Nav className="mr-auto">
			      <Nav.Link href="#"><NavLink to='/' className="nav-link my-link">Home</NavLink></Nav.Link>
			      <Nav.Link href="#"><NavLink to='/statewise' className="nav-link my-link">Covid19</NavLink></Nav.Link>
			      <Nav.Link href="#"><NavLink to="/vaccination" className="nav-link my-link">Vaccination</NavLink></Nav.Link>
			      <NavDropdown style={{color: "red !important"}} title="About Us" id="collasible-nav-dropdown" className="nav-link">
			        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.3">T&C</NavDropdown.Item>
			        <NavDropdown.Divider />
			        <NavDropdown.Item href="#"><NavLink to='/about' className="nav-link my-link">About Us</NavLink></NavDropdown.Item>
			      </NavDropdown>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		</>
		);
}

export default Header;