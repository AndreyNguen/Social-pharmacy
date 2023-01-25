import React from 'react';

export default function OneCard({ drug }) {
  return (
    <div className="Onecard" style={{ width: '18rem' }}>
      <img src={drug.img} className="card-img-top" alt="noImage" />
      <div className="card-body">
        <h5 className="card-title">{drug.name}</h5>
        <p className="card-text">{drug.price}</p>
        <p className="card-text">{drug.status}</p>
        <p className="card-text">{drug.count}</p>
        <a href="/" className="btn btn-primary">В корзину</a>
      </div>
    </div>
  );
}
