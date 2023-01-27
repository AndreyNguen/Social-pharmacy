import React from 'react';
import ModalCard from './ModalCard';

export default function ModalWindow({ modal, setModal }) {
  const allPrice = modal.reduce((acc, el) => acc + el.price, 0);
  return (
    <>
      <button type="button" style={{ background: '#3a3f58', color: '#ece6cd' }} className="btn btn-primary border border-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Корзина
      </button>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Корзина</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div>
              { modal?.map((el) => <ModalCard setModal={setModal} key={el.id} el={el} />)}
            </div>
            <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                Итого:
                {' '}
                {allPrice}
              </div>
              <button type="button" className="btn btn-primary">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
