import React, { useState } from 'react';
import Calender from './Calender';
import OneCard from './OneCard';

export default function Drugs({ allDrugs }) {
  const [drugs, setDrugs] = useState(allDrugs);
  const [selectSort, setSelectSort] = useState('');

  const sortHandler = (sort) => {
    setSelectSort(sort);
    if (sort === 'По наличию') {
      setDrugs(
        drugs
          .filter((el) => el.status === 'yes')
          .concat(drugs.filter((el) => el.status === 'no')),
      );
    }
    if (sort === 'По увеличению цены') {
      setDrugs(drugs.sort((a, b) => a.price - b.price));
    }
    if (sort === 'По уменьшению цены') {
      setDrugs(drugs.sort((a, b) => b.price - a.price));
    }
  };

  return (
    <>
      <Calender allDrugs={allDrugs} />
      <div style={{ display: 'flex', flexDirection: 'row', width: '30rem' }}>
        <select
          className="form-select"
          aria-label="Default select example"
          value={selectSort}
          onChange={(event) => sortHandler(event.target.value)}
        >
          <option disabled value="">
            Сортирока товаров
          </option>
          <option value={drugs.status}>По наличию</option>
          <option value={drugs.price}>По увеличению цены</option>
          <option value={drugs.price}>По уменьшению цены</option>
        </select>
      </div>
      <div className="row mt-3" style={{ justifyContent: 'center' }}>
        {drugs?.map((drug) => <OneCard drug={drug} key={drug.id} />)}
      </div>
    </>
  );
}
