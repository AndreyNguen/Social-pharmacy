import React, { useState } from 'react';

export default function Drugs({ allDrugs }) {
  const [drugs, setDrugs] = useState(allDrugs);
  // console.log(drugs, 'This is all drugs =====');

  return (
    <div>
      {drugs?.map((drug) => <OneCard drug={drug} key={drug.id} />)}
    </div>
  );
}
