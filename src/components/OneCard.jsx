import React from 'react';

export default function OneCard({ drug, setModal }) {
  const cartHandler = () => {
    // localStorage.setItem(`${drug.id}-${drug.name}`, JSON.stringify(drug));
    setModal((prev) => [...prev, drug]);
  };
  return (
    <div className="card col-6 m-2" style={{ width: '22rem', padding: '10px' }}>
      <div className="image" style={{ maxHeight: '326px', minHeight: '326px' }}>
        <img
          src={drug.img}
          className="card-img-top"
          alt="noImage"
          style={{ height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="body" style={{ flex: '1 1 auto' }}>
        <h5 className="card-title">{drug.name}</h5>
        <p className="card-text">
          <strike>
            Стоимость:
            {' '}
            {drug.price}
            {' '}
            руб.
          </strike>
        </p>
        <p className="card-text">
          Цена со скидкой 20%:
          {' '}
          {Math.floor(drug.price * (8 / 10))}
          {' '}
          руб.
        </p>
        <p className="card-text">
          Наличие на складе:
          {' '}
          {drug.count}
        </p>
      </div>
      <button onClick={cartHandler} type="button" style={{ background: '#3a3f58', color: '#ece6cd' }} className="btn btn-primary border border-1 border-dark">
        В корзину
      </button>
    </div>
  );
}
