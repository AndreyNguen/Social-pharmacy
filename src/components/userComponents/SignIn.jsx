import React, { useState } from 'react';

export default function SignIn() {
  const [error, setError] = useState({});

  const submitSignInHandler = async (e) => {
    e.preventDefault();
    const responce = await fetch('/api/user/signin', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (responce.ok) {
      window.location.href = '/';
    } else {
      window.location.href = '/user/signup';
    }
  };

  return (
    <div className="d-flex justify-content-center w-100 p-3 rounded-3">
      <form onSubmit={submitSignInHandler} className="col-sm-5 mb-2 mb-sm-0 m-2">
        <div className="mb-3">
          <input
            name="email"
            type="email"
            className="form-control border border-2 border-dark"
            id="userEmail"
            placeholder="Введите свою электронную почту"
            style={{ background: 'lightgrey' }}
          />
        </div>
        <div className="mb-3">
          <input
            name="pass"
            type="password"
            className="form-control border border-2 border-dark"
            id="userPassword"
            placeholder="Введите пароль"
            style={{ background: 'lightgrey' }}
          />
        </div>
        <button className="btn btn-dark" type="submit">Enter</button>
        {error.message && <div style={{ color: 'purple' }}>{error.message}</div>}
      </form>
    </div>
  );
}
