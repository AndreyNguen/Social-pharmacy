import React, { useEffect, useState } from 'react';

export default function ModalWindow({ drug }) {
  const [drugsCart, setDrugsCart] = useState([]);
  useEffect(() => {
    console.log('YA IN USEEFFECT');
    for (let i = 1; i <= localStorage.length; i += 1) {
      setDrugsCart((prev) => [...prev, localStorage.key(i)]);
    }
  }, []);
  console.log(drugsCart);
  return (
    <>
      <button style={{ background: '#3a3f58', color: '#ece6cd' }} type="button" className="btn btn-light border border-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Корзина
      </button>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Корзина</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <p className="modal-text">Наименование</p>
              <p className="modal-text">Количество</p>
              <p className="modal-text">Стоимость</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
              <button type="button" className="btn btn-primary">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
