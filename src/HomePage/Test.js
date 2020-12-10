//Questions asked during interview
//Q1. Write the o/p of below console logs
import React from 'react';

const Test = () => {
  
let a = {name: 'Mitul', id: 1};
let b = {...a};
b.id = 2;
console.log(a.id); //1
console.log(b.id); //2

//Q2 Write the o/p of below console logs
let c = [1,2,3,4];
let d = c;
c.pop();
console.log(c); // [1,2,3]
console.log(d); // [1,2,3]

//Q3 When I create a copy of a const array of objects, how can I prevent the cloned object from getting modified?
const users = [{
	id: 1,
	name: 'Robin' // "Mitul"
}, {
	id: 2,
	name: 'Akash' // Akash
}, {
	id: 3,
	name: 'Vikas' 
},{
	id: 4,
	name: 'Abhinav'
}];
 //const users2 = users; users2 also displays name as Mitul
 //const users2 = [...users]; //users2 also displays name as Mitul
const users2 = JSON.parse(JSON.stringify(users));
users[0].name = "Mitul"; 
console.log (users);
console.log(users2); 

//Count the number of occurences for each char in a string
const str = "aaaaaaaaabbbdddsaahh";

let counts = {};
let count,index,len,ch;

for (index=0, len=str.length ; index < len ; ++index){
    ch = str.charAt(index);
    count = counts[ch];
    counts[ch] = count ? count + 1 : 1 ;
}
for (ch in counts){
    console.log(ch + "count :" +counts[ch]);
}
	  
//API call in React

// componentDidMount(){ // in case of functional component, change this to useEffect()
// 	fetch('https://randomuser.me/api/')
// 		.then(({ results }) => this.setState({ person: results }));
//   }
}

//What are primitive and non-primitive data types?
//Primitive which returns one value like string, number,boolean, undefined and null
//Non-Primitive which returns a reference type like arrays, objects

//How can I deal with const variable if I want to change its value
// 1. Either make it let
// 2. Assign it to a new let variable and change the value

//What is javascript template literal
// feature of backtick `${}` which helps us to print a variable value or an expression without concatenation '+'

//What is lazy loading
//To sum it up: Lazy loading allows us to load resources like scripts and images “just in time”,
// i.e. only when they’re really needed. This can reduce the initial page loading time and also save bandwidth for your users.

//What are promises
//"I Promise a Result!"
//"Producing code" is code that can take some time
//"Consuming code" is code that must wait for the result
//A Promise is a JavaScript object that links producing code and consuming code

//Promise resolves to true or false, if it is true .then is called , if false then catch is called (both the cases
//callback function would be called )

//Promise resolves to true->callback function with success is called.
//Promise resolves to false->callback function with failure is called.

// Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned. 
//In JavaScript, closures are the primary mechanism used to enable data privacy.
// When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function.

// call back function - sync and async
// lazy loading
// how to pass data between react components
// Passing data between
// - Parent to Child : We can simply use ‘props’ in ReactJs to make the child inherit properties from its parent component.
// - Child to Parent : Use a callback and states
                 //First, we have to create a callback function in the Parent which takes the data to send from the Child1 component.
				//Secondly, we have to pass this callback function to the child same as in the previous scenario.
// - Child to Child : Combine the above
	//Not surprisingly, to pass data between siblings, you have to use the parent as an intermediary. First pass the data from the child to the parent, as an argument into a callback from the parent. Set this incoming parameter as a state on the parent component, then pass it as a prop to the other child (see above example). The sibling can then use the data as a prop.
// Async wait in ES8, ES6
// Promises
// Render child into DOM node
// Memoizing 
// Data binding

// let obj = {name:'Mitul'};
// undefined
// let callName = function(a,b,c){ return 'Welcome' + this.name + a+b+c; };
// undefined
// let arr = ['Hello', 'World' , 'Testing'];
// undefined
// console.log(callName.call(obj,'Nihal','Raj','Bgs'));
// Output : WelcomeMitulNihalRajBgs
// console.log(callName.apply(obj,arr));
// Output : WelcomeMitulHelloWorldTesting


//Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
//let a = "Mitul"; let b = "Kirti";console.log(d); var d;
//Hoisting makes the rendering a lil slow as we occupy a bit of space on the website 
//so to avoid that it is suggested to declare variables inside funtions and not at the top
// To avoid functions from getting hoisted, we should use anonymous function instead of named func like below:
// const test = function(){
// 	let a =10;
// 	return a;
// }
//console.log(a());


//Calling API 
// const userAction = async () => {
// 	const response = await fetch('http://example.com/movies.json');
// 	const myJson = await response.json(); //extract JSON from the http response
// 	// do something with myJson
//   }

export default Test;