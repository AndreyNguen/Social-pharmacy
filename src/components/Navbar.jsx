import axios from 'axios';
import React from 'react';
import ModalWindow from './ModalWindow';

export default function Navbar({ user, modal }) {
  const logoutHandler = () => {
    axios('/api/user/logout')
      .then(() => {
        window.location = '/';
      })
      .catch(console.log);
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'lightgreen' }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/"><h4>Социальная аптека</h4></a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="navbar-nav" style={{ padding: '10px 30px 10px 30px' }}>
          {!user?.id ? (
            <>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/signup">Регистрация</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/signin">Вход</a>
              </li>
            </>
          ) : (
            <div style={{ display: 'flex', columnGap: '15px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '15px' }}>
                <h5>
                  Привет
                </h5>
                <h4>{user?.name}</h4>
                <a className="navbar-brand" href="/profile"><h4>Профиль</h4></a>
                <ModalWindow modal={modal} />
              </div>
              <div>
                <button style={{ marginLeft: '20%' }} onClick={logoutHandler} type="button" className="btn btn-light">Выйти</button>
              </div>
            </div>
          )}

        </ul>

      </div>
    </nav>
  );
}
