import React from 'react';

export default function ModalCard({ el }) {
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
    </div>
  );
}
