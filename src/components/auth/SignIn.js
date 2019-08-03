import React, { useState } from 'react';

const SignIn = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = e => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="container">
      <form className="white" onSubmit={e => handleSubmit(e)}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">email</label>
          <input type="email" id="email" onChange={e => handleChange(e)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <button type="submit" className="btn pink lighten-1 z-depth-0">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
