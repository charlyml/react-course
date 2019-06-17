import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 25 },
      { name: 'Manu', age: 26 },
      { name: 'Json', age: 24 }
    ],
  });

  const [otherState, setOtherState] = useState("Some other value");

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Carlos', age: 29 },
        { name: 'Anel', age: 27 },
      ]
    });
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Anel', age: 26 },
      ]
    });
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button
        onClick={ switchNameHandler.bind(this, 'Max!') }
        style={style}>
          Switch name
        </button>
      <Person
        name={ personsState.persons[0].name }
        age={ personsState.persons[0].age }/>
      <Person
        name={ personsState.persons[1].name }
        age={ personsState.persons[1].age }
        click={ switchNameHandler.bind(this, 'Max') }
        changed={nameChangedHandler}>
        My hobbies: Racing
      </Person>
      <Person
        name={ personsState.persons[2].name }
        age={ personsState.persons[2].age }/>
    </div>
  );
}

export default App;
