import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
const Header = () => (
	<Navbar bg="light" expand="lg">
		<Navbar.Brand href="#home">Simple State Management Library</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<Nav.Link as={Link} to="/">
					Home
				</Nav.Link>
				<Nav.Link as={Link} to="/create">
					Create
				</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default Header;
