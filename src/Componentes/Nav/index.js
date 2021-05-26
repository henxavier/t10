import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Image} from 'react-bootstrap';
import logo from '../../img/ART_T10Bank_Negativo.png';


function BarraNav() {
    return (<>
    <Navbar fixed="top" collapseOnSelect expand="lg" className="barra">

    <Nav>
        <Image className="logo" src={logo}></Image>
    </Nav>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto h5 links">
        
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Sobre nós</Nav.Link>
        <Nav.Link>Serviços</Nav.Link>
        <Nav.Link>Portfólio</Nav.Link>
        <Nav.Link>Contato</Nav.Link>
            
        </Nav>
    </Navbar.Collapse>
    </Navbar>
</>);
}

export default BarraNav