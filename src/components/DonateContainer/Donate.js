import React from 'react';

function Donate() {
  return (
    <div className="App">
      <h1> Donate Page</h1>
        <h4> Back to the User Home Page </h4>
      <a href="/userHome" className="btn btn-primary ">User Home</a> {' '}
      <a href="/" className="btn btn-primary ">To Welcome</a>
    </div>
  );
}

export default Donate;