import React from 'react';

export default function OneLittleCard({ drug }) {
  return (
    <div className="card col-6 m-2" style={{ width: '20rem', padding: '10px' }}>
      <div className="image" style={{ maxHeight: '326px', minHeight: '326px' }}>
        <img src={drug.img} className="card-img-top" alt="noImage" style={{ height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="body" style={{ flex: '1 1 auto' }}>
        <h5 className="card-title">{drug.name}</h5>
      </div>
    </div>
  );
}