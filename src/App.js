import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/Basic">
        <MDBBtn className="ms-3 mt-3">Basic</MDBBtn>
      </Link>
      <Link to="/Events">
        <MDBBtn className="ms-3 mt-3">Events</MDBBtn>
      </Link>
      <Link to="/Double">
        <MDBBtn className="ms-3 mt-3">Double</MDBBtn>
      </Link>
      <Link to="/Events2">
        <MDBBtn className="ms-3 mt-3">Events 2</MDBBtn>
      </Link>
      <Link to="/Horizontal">
        <MDBBtn className="ms-3 mt-3">Horizontal</MDBBtn>
      </Link>
      <Link to="/Images">
        <MDBBtn className="ms-3 mt-3">Images</MDBBtn>
      </Link>
      <Link to="/News">
        <MDBBtn className="ms-3 mt-3">News</MDBBtn>
      </Link>
      <Link to="/Cards">
        <MDBBtn className="ms-3 mt-3">Cards</MDBBtn>
      </Link>
      <Link to="/Gradient">
        <MDBBtn className="ms-3 mt-3">Gradient</MDBBtn>
      </Link>
    </MDBContainer>
  );
}

export default App;
