import React from "react";
import { Row, Col } from "react-bootstrap";
import "../index.scss";

const names = ["Mitul", "Kirti", "Mk", "Mitali", "Michel"];
let namesList = [1, 2, 6, 7, 9];
const people = [
  {
    name: "James",
    age: 61,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "Paul",
    age: 65,
  },
  {
    name: "Ringo",
    age: 49,
  },
  {
    name: "George",
    age: 34,
  },
];
const scores = [100, 200, 300, 400, 500];

// let str = ['Apple', 'Orange', 'Plan', 'Python', 'Money'];
// //from this array you need to extract the values that contains at least 2 vowels
// let vowelArr = ['a','e','i','o','u'];

const FilterName = (props) => {
  const handleChange = (evt) => {
    let userInput = document.getElementById("todoInput").value;
    document.getElementById("displayList").textContent = userInput;
    return <div>{userInput}</div>;
  };
  // const vowelsCounter = (strVal) => {
  //   // Search text with Regex and store all matching instances 
  //   let matchingInstances = strVal.match(/[aeiou]/gi);
  //   // Check if matching instances exist then calculate length
  //   if (matchingInstances.split(',').length == 2) {    
  //       // Return number of vowels
  //       return strVal;
  //   } else {
  //       return 0
  //   }
  // }

  return (
    <div className="name-list">
      {/* <Row>
      {str.filter((name) => name.includes(name.match(/[aeiou]/gi)))
      .map((nameIndividual) => {
            return (
              <>
            <li> {nameIndividual} </li>
            </>
            )
          })}
      </Row> */}
      <Row>
        {/* Program to display names list normally */}
        <strong>Display list</strong>
        <Col>
          {names.map((nameIndividual) => {
            return <li>{nameIndividual}</li>;
          })}
        </Col>
      </Row>
      {/* Program to display names object normally
      <strong>Display object</strong>
      {people.map((peo) => (
        <>
          <li>{peo.name}</li>
          <li>{peo.age}</li>
        </>
      ))} */}
      <Row>
        {/* Program to filter out the names from the names list starting with 'Mi' */}
        <strong>Names starting with 'Mi' :</strong>
        <Col>
          {names
            .filter((name) => name.includes("Mi"))
            .map((filteredName) => (
              <li key={filteredName}> {filteredName}</li>
            ))}
        </Col>
      </Row>
      <Row>
        <strong>Numbers greater than 5 :</strong>
        <Col>
          {namesList
            .filter((nm) => nm > 5)
            .map((filternume) => (
              <li key={filternume}> {filternume}</li>
            ))}
        </Col>
      </Row>
      <Row>
        {/* Program to filter out the names from the names list having more than 60yrs of age */}
        <strong>People above 60 years of age :</strong>
        <Col>
          {people
            .filter((person) => person.age > 60)
            .map((oldAge) => (
              <li key={oldAge}> {oldAge.name}</li>
            ))}
        </Col>
      </Row>
      <Row>
        {/* Program to use reduce function */}
        <strong>
          Program to use reduce function :
          <Col>
            {scores.reduce(
              (previousScore, currentScore) => previousScore + currentScore,
              0
            )}
          </Col>
        </strong>
      </Row>
      <Row>
        {/* Program to display the value entered in an input tag */}
        <input
          id="todoInput"
          placeholder="Type a text"
          className="text-box-filter-component"
          onChange={(evt) => {
            handleChange();
          }}
        />
      </Row>
      <div id="displayList"></div>
      <br />
    </div>
  );
};
export default FilterName;
