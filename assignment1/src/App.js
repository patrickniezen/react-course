import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  const [userState, setUserState] = useState({
    username: 'patrickniezen'
  });

  const usernameChangedHandler = (newUsername) => {
    setUserState({
      username: newUsername
    });
  }

  return (
    <div className="App">
      <UserInput onChange={usernameChangedHandler} username={userState.username}></UserInput>
      <UserOutput username={userState.username}></UserOutput>
      <UserOutput username={userState.username}></UserOutput>
      <UserOutput username={userState.username}></UserOutput>
    </div>
  );
}

export default App;
