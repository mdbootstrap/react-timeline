import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "./news.css";

export default function News() {
  return (
    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol md="6" offsetMd="3">
          <h4 style={{ marginLeft: "1.2rem" }}>Latest News</h4>
          <ul className="timeline-3">
            <li>
              <a href="#!">New Web Design</a>
              <a href="#!" className="float-end">
                21 March, 2014
              </a>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula....
              </p>
            </li>
            <li>
              <a href="#!">21 000 Job Seekers</a>
              <a href="#!" className="float-end">
                4 March, 2014
              </a>
              <p className="mt-2">
                Curabitur purus sem, malesuada eu luctus eget, suscipit sed
                turpis. Nam pellentesque felis vitae justo accumsan, sed semper
                nisi sollicitudin...
              </p>
            </li>
            <li>
              <a href="#!">Awesome Employers</a>
              <a href="#!" className="float-end">
                1 April, 2014
              </a>
              <p className="mt-2">
                Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed
                nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit.
                Sed nec tempor nibh...
              </p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
