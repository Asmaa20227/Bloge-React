import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import button from 'react-bootstrap/Button';
import React from "react";
import { Link} from "react-router-dom";
 

function CollapsibleExample() {
  return(
    
    <Navbar collapseOnSelect expand="lg" bg="Light" variant="light">
      <Container>
        <Navbar.Brand href="#home"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/Home"> </Nav.Link>
        
          <Nav.Link as={Link} to="/Posts"> <button type="button" className="btn btn-warning">Posts</button></Nav.Link>
         
           <Nav.Link as={Link} to="/Photos"><button type="button" className="btn btn-dark">Photos</button></Nav.Link>
           <Nav.Link as={Link} to="/Users"><button type="button" className="btn btn-secondary">Users</button></Nav.Link>
            
          </Nav>
          <Nav>
        
            <Nav.Link eventKey={2} href="#memes">
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
      
    

  );
}

export default CollapsibleExample;