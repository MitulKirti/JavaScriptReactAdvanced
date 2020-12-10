import React from "react";
import { Button } from "react-bootstrap";

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

const FilterName = (props) => {
  const changeName = () => {
    props.sendData("Mitul Kirti");
    console.log(props.sendData());
  };

  const handleChange = (evt) => {
    console.log("called handle");
    let userInput = document.getElementById("todoInput").value;
    document.getElementById("displayList").textContent = userInput;
    return <div>{userInput}</div>;
  };

  return (
    <div className="name-list">
      {/* Program to display names list normally */}
      <strong>Display list</strong>
      {names.map((nameIndividual) => {
        return <li>{nameIndividual}</li>;
      })}
      {/* Program to display names object normally */}
      <strong>Display object</strong>
      {people.map((peo) => (
        <>
          <li>{peo.name}</li>
          <li>{peo.age}</li>
        </>
      ))}
      {/* Program to filter out the names from the names list starting with 'Mi' */}
      <strong>Names starting with 'Mi'</strong>
      {names
        .filter((name) => name.includes("Mi"))
        .map((filteredName) => (
          <li key={filteredName}>{filteredName}</li>
        ))}
      <strong>Numbers greater than 5</strong>
      {namesList
        .filter((nm) => nm > 5)
        .map((filternume) => (
          <li key={filternume}>{filternume}</li>
        ))}
        
      {/* Program to filter out the names from the names list having more than 60yrs of age */}
      <strong>People above 60 years of age </strong>
      {people
        .filter((person) => person.age > 60)
        .map((oldAge) => (
          <li key={oldAge}>{oldAge.name}</li>
        ))}
      {/* Program to use reduce function */}
      <p>
        {scores.reduce(
          (previousScore, currentScore) => previousScore + currentScore,
          0
        )}
      </p>
      {/* Program to display the value entered in an input tag */}
      <input
        id="todoInput"
        onChange={(evt) => {
          console.log(evt.target.value);
          handleChange();
        }}
      />

      <div id="displayList"></div>
      <br />
      <Button onClick={() => changeName()}>Click</Button>
    </div>
  );
};
export default FilterName;
