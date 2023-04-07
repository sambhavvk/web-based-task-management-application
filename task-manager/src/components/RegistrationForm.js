import React from 'react';

const RegistrationForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const response = await fetch('/.netlify/functions/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log(data.message);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;