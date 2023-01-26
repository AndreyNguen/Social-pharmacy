import React from 'react';

export default function OneCard({ drug, setModal }) {
  const cartHandler = () => {
    localStorage.setItem(`${drug.id}-${drug.name}`, JSON.stringify(drug));
    setModal((prev) => [...prev, drug]);
  };
  return (
    <div className="card col-6 m-2" style={{ width: '22rem', padding: '10px' }}>
      <div className="image" style={{ maxHeight: '326px', minHeight: '326px' }}>
        <img src={drug.img} className="card-img-top" alt="noImage" style={{ height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="body" style={{ flex: '1 1 auto' }}>
        <h5 className="card-title">{drug.name}</h5>
        <p className="card-text">
          Стоимость:
          {' '}
          {drug.price}
          {' '}
          руб.
        </p>
        <p className="card-text">
          Наличие на складе:
          {' '}
          {drug.count}
        </p>
      </div>
      {/* <button onClick={() => setModal(drug)} type="button" className="btn btn-primary">В корзину</button> */}
      <button onClick={cartHandler} type="button" className="btn btn-primary">В корзину</button>

    </div>
  );
}
