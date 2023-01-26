import React, { useState } from 'react';

export default function Profile({ user }) {
  const [viewInput, setInput] = useState(false);

  const clickHandler = () => {
    setInput(true);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p>
            <h4>Имя пользователя:</h4>
            {' '}
            {user?.name}
            {' '}
            <button onClick={clickHandler} className="btn btn-secondary" type="button">Изменить</button>
          </p>
          <p>
            <h4>Электронная почта:</h4>
            {' '}
            {user?.email}
            {' '}
            <button onClick={clickHandler} className="btn btn-secondary" type="button">Изменить</button>
          </p>
          <p>
            <h4>
              Пароль:
            </h4>
            <button onClick={clickHandler} className="btn btn-secondary" type="button">Изменить</button>
          </p>
        </div>
      </div>
    </div>

  );
}
