import React, { useState } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  const [usernameState, setUsernameState] = useState({
    username: "Super Carlos"
  });

  const usernameChangedHandler = (event) => {
    setUsernameState({
      username: event.target.value
    });
  }

  return (
    <div className="App">
      <UserInput currentName={usernameState.username} changed={usernameChangedHandler} />
      <UserOutput username={usernameState.username} />
      <UserOutput username={usernameState.username} />
      <UserOutput username="Anel" />
    </div>
  );
}

export default App;
