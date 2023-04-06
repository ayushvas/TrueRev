import { Image, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./App.css";
import rating from "../images/imagep.png";
import ButtonLanding from "./Button";




function App() {
  return (
    
<Container fluid className="p">
    
    <Row className="row">
    <Col sm={6} className="colone">
      <h1>Reviews the world trusts.</h1>
      <div>
    <ButtonLanding className="user" variant="primary" size="lg" icon="fa-solid fa-user" content=" Sign in as a user"/>
    <ButtonLanding calssName="client" variant="outline-light" size="lg" icon="fa-solid fa-store" content=" Sign in as a store" className="buttons"/>
    </div>
    </Col>
    <Col sm={6} className="div1">
    <div >
      <Image src={rating} alt="Oops!" fluid/>
    </div>
    </Col>
    </Row>
    
    
    
    
    
    </Container>
    
  );
}

export default App;
