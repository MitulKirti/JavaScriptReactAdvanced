import React from "react";
import Metric from "../Metric/metric";

const AboutUs = () => {
  const outerFunc = (a) => {
    let b = 10;
    const innerFunc =() => {
      let sum = a+b; //lexical scoping is where the variables defined in the outer scope is available
      console.log(`The sum of two numbers is ${sum}`);
    }
    return innerFunc;
  }
  let result = outerFunc(20);
  console.dir(result);
  result();
   
  let outerFunction = () =>{
    let i = 1;
    let j = 2; //Since we are not using j inside the outer function we will not have a closure.
    return () => {
      console.log(i);
    }
  }
console.dir(outerFunction());
  return <div>
    <Metric />
    </div>;
};
export default AboutUs;