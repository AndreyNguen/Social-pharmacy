import axios from 'axios';
import React from 'react';
import ModalWindow from './ModalWindow';

export default function Navbar({ user, modal, setModal }) {
  const logoutHandler = () => {
    axios('/api/user/logout')
      .then(() => {
        window.location = '/';
      })
      .catch(console.log);
  };

  return (
    <nav className="navbar navbar-expand-lg border border-1 border-grey round-3" style={{ backgroundColor: '#f9ac67' }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/">
                <img className="figure-img img-fluid rounded" src="https://img.icons8.com/pastel-glyph/64/null/hospital--v6.png" alt="noimg:(" href="/" />
              </a>
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
                <h5 style={{ color: '#3a3f58' }}>
                  Привет:
                </h5>
                <h4 style={{ color: '#3a3f58' }}>{user?.name}</h4>
                <a className="navbar-brand" href="/profile"><h5 style={{ color: '#3a3f58' }}>Личный кабинет</h5></a>
              </div>
              <ModalWindow setModal={setModal} modal={modal} />
              <div>
                <button style={{ marginLeft: '20%', background: '#3a3f58', color: '#ece6cd' }} onClick={logoutHandler} type="button" className="btn btn-light border border-dark">Выйти</button>
              </div>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}
