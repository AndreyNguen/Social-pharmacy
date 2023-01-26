import React, { useState } from 'react';

export default function Profile({ user }) {
  const [changeProfile, setChangeProfile] = useState(user);
  const [viewInputName, setInputName] = useState(false);
  const [viewInputEmail, setInputEmail] = useState(false);
  const [viewInputPassword, setInputPassword] = useState(false);

  const [editInput, setEditInput] = useState({
    name: user.name,
    email: user.email,
    pass: user.password,
  });

  const changeHandler = (e) => {
    setEditInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const saveHandler = (id) => {
    fetch(`/profile/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...editInput, id }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setChangeProfile((prev) => ({ ...prev, ...updated }));
        setInputName(false);
        window.location.reload();
      });
  };

  const clickHandlerName = () => {
    setInputName(true);
  };

  const clickHandlerEmail = () => {
    setInputEmail(true);
  };

  const clickHandlerPassword = () => {
    setInputPassword(true);
  };

  return (
    <div>
      <div>
        <div className="changeName">
          {viewInputName ? (
            <div>
              <input
                name="name"
                value={editInput.name}
                onChange={changeHandler}
                type="text"
                className="form-control border border-2 border-dark"
                placeholder="Введите новое имя пользователя"
              />
              <button onClick={() => saveHandler(user.id)} type="button" className="btn btn-dark m-1">save</button>
              <button onClick={() => setInputName(false)} type="button" className="btn btn-dark">close</button>
            </div>
          ) : (
            <div className="d-flex m-3">
              <h4>Имя пользователя:</h4>
              <h3>{changeProfile?.name}</h3>
              <div>
                <button onClick={clickHandlerName} className="btn btn-success border border-dark border-1" type="button">Изменить</button>
              </div>
            </div>
          )}
        </div>
        <div className="changeEmail">
          {viewInputEmail ? (
            <div>
              <input
                name="email"
                value={editInput.email}
                onChange={changeHandler}
                type="email"
                className="form-control border border-2 border-dark"
                placeholder="Введите новую электронную почту"
              />
              <button onClick={() => saveHandler(user.id)} type="button" className="btn btn-dark m-1">save</button>
              <button onClick={() => setInputEmail(false)} type="button" className="btn btn-dark">close</button>
            </div>
          ) : (
            <div className="d-flex m-3">
              <h4>Электронная почта:</h4>
              <h3>{changeProfile?.email}</h3>
              <div>
                <button onClick={clickHandlerEmail} className="btn btn-success border border-dark border-1" type="button">Изменить</button>
              </div>
            </div>
          )}
        </div>
        <div className="changePassword">
          {viewInputPassword ? (
            <>
              <input
                name="oldPass"
                onChange={changeHandler}
                type="password"
                className="form-control border border-2 border-dark"
                placeholder="Введите старый пароль"
              />
              <input
                name="newPass"
                onChange={changeHandler}
                type="password"
                className="form-control border border-2 border-dark"
                placeholder="Введите новый пароль"
              />
              <input
                name="repeatPass"
                onChange={changeHandler}
                type="password"
                className="form-control border border-2 border-dark"
                placeholder="Повторите пароль"
              />
              <button onClick={() => saveHandler(user.id)} type="button" className="btn btn-dark m-1">save</button>
              <button onClick={() => setInputPassword(false)} type="button" className="btn btn-dark">close</button>
            </>
          ) : (
            <div className="d-flex m-3">
              <h4>
                Пароль:
              </h4>
              <h3>*******</h3>
              <div>
                <button onClick={clickHandlerPassword} className="btn btn-success border border-dark border-1" type="button">Изменить</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
