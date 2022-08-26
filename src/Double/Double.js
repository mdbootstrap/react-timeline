import React from "react";
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import "./double.css";

export default function Double() {
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#F0F2F5" }}>
      <div className="main-timeline">
        <div className="timeline left">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>2017</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline right">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>2016</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline left">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>2015</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline right">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>2012</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline left">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>2011</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline right">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>2007</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </MDBContainer>
  );
}
