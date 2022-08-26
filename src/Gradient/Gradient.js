import React from "react";
import { MDBCard, MDBCardBody, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import "./gradient.css";

export default function Gradient() {
  return (
    <MDBContainer fluid className="py-5 gradient-custom-5">
      <div className="main-timeline-5">
        <div className="timeline-5 right-5">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h5>Title of section 1</h5>
              <span className="small text-muted">
                <MDBIcon fas icon="clock" className="me-1" />
                21 March, 2020
              </span>
              <p className="mt-2 mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula....
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-5 right-5">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h5>Title of section 2</h5>
              <span className="small text-muted">
                <MDBIcon fas icon="clock" className="me-1" />5 April, 2020
              </span>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper.
              </p>
              <p className="mb-0">
                Libero expedita explicabo eius fugiat quia aspernatur autem
                laudantium error architecto recusandae natus sapiente sit nam
                eaque, consectetur porro molestiae ipsam! Deleniti.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-5 right-5">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h5>Title of section 3</h5>
              <span className="small text-muted">
                <MDBIcon fas icon="clock" className="me-1" />
                18 August, 2020
              </span>
              <p className="mt-2 mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula....
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-5 right-5">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h5>Title of section 4</h5>
              <span className="small text-muted">
                <MDBIcon fas icon="clock" className="me-1" />
                10 October, 2020
              </span>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula....
              </p>
              <p className="mb-0">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </MDBContainer>
  );
}
