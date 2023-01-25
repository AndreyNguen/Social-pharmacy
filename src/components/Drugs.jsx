import React, { useState } from 'react';
import OneCard from './OneCard';

export default function Drugs({ allDrugs }) {
  const [drugs, setDrugs] = useState(allDrugs);
  // console.log(drugs, 'This is all drugs =====');

  return (
    <div className="row mt-3" style={{ justifyContent: 'center' }}>
      {drugs?.map((drug) => <OneCard drug={drug} key={drug.id} />)}
    </div>
  );
}
