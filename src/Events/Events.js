import React from "react";
import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import "./events.css";

export default function Events() {
  return (
    <MDBContainer className="py-5">
      <ul className="timeline-with-icons">
        <li className="timeline-item mb-5">
          <span className="timeline-icon">
            <MDBIcon fas icon="rocket" color="primary" size="sm" />
          </span>

          <h5 className="fw-bold">Our company starts its operations</h5>
          <p className="text-muted mb-2 fw-bold">11 March 2020</p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            necessitatibus adipisci, ad alias, voluptate pariatur officia
            repellendus repellat inventore fugit perferendis totam dolor
            voluptas et corrupti distinctio maxime corporis optio?
          </p>
        </li>

        <li className="timeline-item mb-5">
          <span className="timeline-icon">
            <MDBIcon fas icon="hand-holding-usd" color="primary" size="sm" />
          </span>
          <h5 className="fw-bold">First customer</h5>
          <p className="text-muted mb-2 fw-bold">19 March 2020</p>
          <p className="text-muted">
            Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed
            aliquet laoreet sapien, eget pulvinar lectus maximus vel. Phasellus
            suscipit porta mattis.
          </p>
        </li>

        <li className="timeline-item mb-5">
          <span className="timeline-icon">
            <MDBIcon fas icon="users" color="primary" size="sm" />
          </span>
          <h5 className="fw-bold">Our team exceeds 10 people</h5>
          <p className="text-muted mb-2 fw-bold">24 June 2020</p>
          <p className="text-muted">
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nulla ullamcorper arcu lacus, maximus
            facilisis erat pellentesque nec. Duis et dui maximus dui aliquam
            convallis. Quisque consectetur purus erat, et ullamcorper sapien
            tincidunt vitae.
          </p>
        </li>

        <li className="timeline-item mb-5">
          <span className="timeline-icon">
            <MDBIcon fas icon="money-bill-wave" color="primary" size="sm" />
          </span>
          <h5 className="fw-bold">Earned the first million $!</h5>
          <p className="text-muted mb-2 fw-bold">15 October 2020</p>
          <p className="text-muted">
            Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed et
            urna sit amet massa dapibus tristique non finibus ligula. Nam
            pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
            vulputate mattis.
          </p>
        </li>
      </ul>
    </MDBContainer>
  );
}
