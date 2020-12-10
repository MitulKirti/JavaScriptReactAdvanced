import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import FilterName from "../FilterNames/FilterName";
import PallindromeCode from "./PallindromeCode";
import { Row, Col, Button, Nav, NavItem } from "react-bootstrap";

const HomePage = (props) => {
  useEffect(() => {
    console.log("hello");
    //api
    //error
    // setInterval(() => {
    //     alert('setInterval example');
    // },6000);
    // setTimeout(() => {
    //     alert('Logged out');
    // },7000);
  });
  // var x = 10;
  const [name, setName] = useState(props.name);
  let [childData, setChildData] = useState("Mitul");

  setChildData = (dataFromChild) => {
    console.log(dataFromChild);
  };
  return (
    <div>
      <img
        src="../assets/nature-images.jpg"
        alt="nature"
        className="nature-img"
      />
      <Nav
        fill
        variant="pills"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/app">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/filterName">Names</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Careers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Support</Nav.Link>
        </Nav.Item>
      </Nav>
      <Row className="title-block">
        <Col>
          {name}
          <div className="justify-content-start">
            <Button
              onClick={() => setName("Title reset")}
              variant="outline-success"
            >
              Click me to reset the title!
            </Button>
          </div>
          <p> Javascript is a
          <a href="#" data-text="Code is not precompiled instead it is evaluated,compiled and executed at runtime" className="info-modal"> weekly typed </a>
          programming language
          </p>
        </Col>
        {/* <Col>
          <FilterName sendData={() => setChildData()} />
        </Col> */}
        <Col>
          <PallindromeCode />
          {/* {childData} */}
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
