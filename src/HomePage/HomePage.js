import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./HomePage.scss";
import Map from "../Map/Map";

const HomePage = (props) => {
  const [heading, setHeading] = useState(props.heading);
  const [content, setContent] = useState("");

  return (
    <>
      <p className="title-name"> {heading}</p>
      <Button
        onClick={() => setHeading("Title reset")}
        variant="outline-success"
        className="title-btn"
      >
        Click here to reset the title!
      </Button>
      <article className="title-name">
        Calling Map Component from Home Component to display a react-simple-map
        below:
      </article>
      <Map content={content} setTooltipContent={setContent} />
    </>
  );
};

export default HomePage;
