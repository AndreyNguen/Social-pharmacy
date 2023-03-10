import React, { useState } from 'react';
import OneLittleCard from './OneLittleCard';

export default function Calender({ allDrugs, setModal }) {
  const alldrugs = [...allDrugs];
  const [currentIndex, setCurrentIndex] = useState(9);
  const freeIndexes = [
    [5, 1, 2],
    [4, 2, 3],
    [5, 6, 2],
    [0, 3, 2],
    [4, 2, 3],
    [5, 6, 2],
    [0, 3, 2],
    [2, 4, 1],
    [7, 3, 0],
    [2, 4, 5],
    [2, 6, 3],
    [0, 3, 2],
    [6, 4, 9],
    [4, 1, 5],
    [7, 6, 2],
    [9, 3, 2],
    [2, 4, 1],
  ];
  if (currentIndex < 0) {
    return setCurrentIndex(6);
  }
  if (currentIndex >= freeIndexes.length) {
    return setCurrentIndex(7);
  }
  // useState -> currentIndex
  // onClick -> currentIndex++ / --
  // useEffect: [currentIndex] -> threeFreeDrugs % freeIndexes.length !
  // if currentIndex -> max, show (esche ne reshili kakie lekarstva)
  const [a, b, c] = freeIndexes[currentIndex];
  const threeFreeDrugs = [alldrugs[a], alldrugs[b], alldrugs[c]];
  return (
    <div className="row mt-3" style={{ justifyContent: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
        <button style={{ background: '#3a3f58', color: '#ece6cd' }} className="btn btn-light border border-1 m-1" onClick={() => setCurrentIndex((prev) => prev - 1)} type="button">Предудыдущая неделя</button>
        <button style={{ background: '#3a3f58', color: '#ece6cd' }} className="btn btn-light border border-1 m-1" onClick={() => setCurrentIndex((prev) => prev + 1)} type="button">Следущая неделя</button>
      </div>
      {threeFreeDrugs.map((el) => <OneLittleCard setModal={setModal} key={el.id} drug={el} />)}
    </div>
  );
}
