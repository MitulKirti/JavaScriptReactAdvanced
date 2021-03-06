// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with 'light' as the default).
import React from 'react';
import { Button } from 'react-bootstrap';
const ThemeContext = React.createContext('hello');

const Context = () => {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing 'dark' as the current value.
    return (
      <ThemeContext.Provider value='test'>
        <Toolbar />
      </ThemeContext.Provider>
    );
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
let Toolbar =() => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

const ThemedButton =() => {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is 'dark'.
  const contextType = ThemeContext;
  console.log(  `theme={contextType}`,{contextType});
    return <Button theme={contextType} variant='outline-success'className='title-btn' > Context in React is a good concept </Button>;
  }
  export default Context;