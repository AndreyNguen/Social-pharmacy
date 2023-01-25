import React, { useState } from 'react';

export default function MainPage() {
  const [drugs, setDrugs] = useState({ status: '', price: '' });
  const [selectSort, setSelectSort] = useState('');

  const sortHandler = (sort) => {
    setSelectSort(sort);
    setDrugs([...drugs].sort((a, b) => (a[sort] > b[sort] ? 1 : -1)));
  };
  return (
    <div className="col-3">
      <select
        className="form-select"
        aria-label="Default select example"
        value={selectSort}
        onChange={sortHandler}
      >
        <option selected disabled>
          Сортировать товары
        </option>
        <option value="status">По наличию</option>
        <option value="price">По цене</option>
      </select>
    </div>
  );
}
