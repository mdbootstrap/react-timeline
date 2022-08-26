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
[![React Timeline #1](https://user-images.githubusercontent.com/108793661/186896680-61fe5a0a-63f2-4113-a99d-b612f3232c0f.png)](https://mdbootstrap.com/docs/react/extended/timeline/#section-events-timeline-with-icons)

### Double-sided timeline:
[![React Timeline #2](https://user-images.githubusercontent.com/108793661/186899284-f278b8f5-a50d-4347-92a2-04c078ae67d9.png)](https://mdbootstrap.com/docs/react/extended/timeline/#section-double-sided)

### Timeline events:
[![React Timeline #3](https://user-images.githubusercontent.com/108793661/186905495-a99c7170-bef6-4c09-a23d-eb7d279971b3.png)](https://mdbootstrap.com/docs/react/extended/timeline/#section-timeline-events)

### Horizontal timeline:
[![React Timeline #4](https://user-images.githubusercontent.com/108793661/186905707-26e320d1-8854-48b2-bb88-cbc2e1abb404.png)](https://mdbootstrap.com/docs/react/extended/timeline/#section-horizontal-timeline)

### Timeline with images:
[![React Timeline #4](https://user-images.githubusercontent.com/108793661/186905867-f54fae7e-b52c-4297-ae9d-efcf8b1ec572.png)](https://mdbootstrap.com/docs/react/extended/timeline/#section-timeline-images)

### Timeline latest news:
[![React Timeline #5](https://user-images.githubusercontent.com/108793661/186905998-e097c588-ad2a-4d7b-8201-00aeb54fc3e8.png)](https://mdbootstrap.com/docs/react/extended/timeline/#section-timeline-latest-news)

You can find other examples [here](https://mdbootstrap.com/docs/react/extended/timeline).

<hr />

## More extended React documentation
<ul>
<li><a href="https://mdbootstrap.com/docs/react/extended/code/">React Bootstrap Code</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gallery/">React Bootstrap Gallery</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/hamburger-menu/">React Bootstrap Hamburger Menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/jumbotron/">React Bootstrap Jumbotron</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/maps/">React Bootstrap Maps</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/mega-menu//">React Bootstrap Mega Menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/media-object/">React Bootstrap Media object</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/multiselect/">React Bootstrap Multiselect</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/masonry/">React Bootstrap Masonry</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/contact/">React Bootstrap Contact form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gradients/">React Bootstrap Gradients</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/pagination/">React Bootstrap Pagination</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/panels/">React Bootstrap Panels</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/social-media/">React Bootstrap Social Media icons & buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/search/">React Bootstrap Search</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-sort/">React Bootstrap Table sort</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-responsive/">React Bootstrap Table responsive</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-scroll/">React Bootstrap Table scroll</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-search/">React Bootstrap Table search</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/textarea/">React Bootstrap Textarea</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/sidebar/">React Bootstrap Sidebar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/profiles/">React Bootstrap Profiles</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/dropdown-multilevel/">React Bootstrap Nested Dropdown</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/bootstrap-address-form/">React Bootstrap Address Form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/back-to-top">React Scroll Back to Top button</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/product-cards">React Product Cards</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/avatar">React Avatar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/carousel-with-thumbnails">React Carousel Slider with Thumbnails</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/chat">React Chat</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/comparison-table">React Comparison table</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/comments">React Comments</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/drawer">React Drawer</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/faq">React FAQ component / section</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/invoice">React Invoice</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/news-feed">React News feed</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/offcanvas">React Offcanvas</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/order-details">React Order details</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/page-transitions">React Page transitions</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/quotes">React Quotes</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/payment-forms">React Payment forms</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/select-with-custom-input">React Select with custom Input</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/square-buttons">React Square Buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/testimonial-slider">React Testimonial Slider</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/testimonials">React Testimonials / Reviews</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/bootstrap-survey-form">React Survey form</a></li>
</ul>
