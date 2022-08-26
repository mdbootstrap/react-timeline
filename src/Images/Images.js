import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./images.css";

export default function Images() {
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#F0F2F5" }}>
      <div className="main-timeline-2">
        <div className="timeline-2 left-2">
          <MDBCard>
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(135).webp"
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">Ut enim ad minim veniam</h4>
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2017
              </p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 right-2">
          <MDBCard>
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(129).webp"
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">Duis aute irure dolor</h4>
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2016
              </p>
              <p className="mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 left-2">
          <MDBCard>
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(131).webp"
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">Sed ut nihil unde omnis</h4>
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2015
              </p>
              <p className="mb-0">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 right-2">
          <MDBCard>
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(125).webp"
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">Quis autem vel eum voluptate</h4>
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2014
              </p>
              <p className="mb-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 left-2">
          <MDBCard>
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(144).webp"
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">Mussum ipsum cacilds</h4>
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2013
              </p>
              <p className="mb-0">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </MDBContainer>
  );
}
