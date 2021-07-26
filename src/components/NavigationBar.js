import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function NavigationBar() {
  
  return (
      <div>
    <Navbar variant="light">
  <Container>
    <Navbar.Brand><img className="navbar__logo" src={process.env.PUBLIC_URL+"/assets/Netflix_Logo_CMYK.png"} /></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end nav__text">
      <Navbar.Text>
      <Button variant="danger">SIGN IN</Button>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  );
}

export default NavigationBar;
