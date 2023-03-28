import React, { useState } from 'react';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Send login request to server using username and password
    // If login is successful, call props.onLoginSuccess()
    // Otherwise, set error message
    setErrorMessage('Invalid username or password.');
  };

  return (
    <form onSubmit={handleLogin}>
      <label>Username:</label>
      <input type="text" value={username} onChange={handleUsernameChange} />
      <label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <button type="submit">Login</button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}

export default Login;
