import React from 'react';

export default function ModalCard({ el, setModal }) {
  const deleteHandler = (id) => {
    setModal((prev) => prev.filter((elem) => elem.id !== id));
  };
  return (
    <div className="modal-body">
      <p className="modal-text">
        Наименование:
        {' '}
        {el.name}
      </p>
      <p className="modal-text">Кол-во: 1</p>
      <p className="modal-text">
        Цена:
        {' '}
        {el.price}
      </p>
      <button onClick={() => deleteHandler(el.id)} className="btn border border-1 border-dark round-1" type="button">Удалить</button>
    </div>

  );
}
