![MDB Logo](https://mdbootstrap.com/img/Marketing/general/logo/medium/mdb-react.png)

# MDB React 5

Responsive React Timelines built with Bootstrap 5. Horizontal and vertical timeline examples, interactive timeline, double-sided timeline & more. Easy to customize.

Check out [React Timeline Documentation](https://mdbootstrap.com/docs/react/extended/timeline) for detailed instructions & even more examples.

## Basic example
![Basic example](https://user-images.githubusercontent.com/108793661/186896362-31b22fba-2f50-41f5-a5ca-ae1ce0f9f448.png)
```js
import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer className="py-5">
      <ul className="timeline">
        <li className="timeline-item mb-5">
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
          <h5 className="fw-bold">First customer</h5>
          <p className="text-muted mb-2 fw-bold">19 March 2020</p>
          <p className="text-muted">
            Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed
            aliquet laoreet sapien, eget pulvinar lectus maximus vel. Phasellus
            suscipit porta mattis.
          </p>
        </li>
        <li className="timeline-item mb-5">
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
```
```css
.timeline {
  border-left: 1px solid hsl(0, 0%, 90%);
  position: relative;
  list-style: none;
}

.timeline .timeline-item {
  position: relative;
}

.timeline .timeline-item:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .timeline-item:after {
  background-color: hsl(0, 0%, 90%);
  left: -38px;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  content: "";
}
```

## How to use?

1. Download MDB 5 - FREE REACT UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[▶️ Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)


## More examples (click on the image to see a live demo)
### Events timeline with icons:
[![React Timeline #1](https://user-images.githubusercontent.com/108793661/186896680-61fe5a0a-63f2-4113-a99d-b612f3232c0f.png)](https://mdbootstrap.com/docs/react/extended/timeline#section-events-timeline-with-icons)

### Double-sided timeline:
[![React Timeline #2](https://user-images.githubusercontent.com/108793661/186899284-f278b8f5-a50d-4347-92a2-04c078ae67d9.png)](https://mdbootstrap.com/docs/react/extended/timeline#section-double-sided)
