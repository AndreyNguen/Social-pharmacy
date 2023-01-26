import React, { useState } from 'react';
import OneLittleCard from './OneLittleCard';

// function genRandomCount(max) {
//   let arr = [0, 0, 0];
//   while (!(arr[0] !== arr[1] && arr[2] !== arr[1] && arr[2] !== arr[0])) {
//     arr = arr.map(() => Math.floor(max * Math.random()));
//   }
//   return arr;
// }

export default function Calender({ allDrugs }) {
  const alldrugs = [...allDrugs];
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // useState -> currentIndex
  // onClick -> currentIndex++ / --
  // useEffect: [currentIndex] -> threeFreeDrugs % freeIndexes.length !
  // if currentIndex -> max, show (esche ne reshili kakie lekarstva)
  const [a, b, c] = freeIndexes[currentIndex];
  const threeFreeDrugs = [alldrugs[a], alldrugs[b], alldrugs[c]];
  return (
    <div className="row mt-3" style={{ justifyContent: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
        <button onClick={() => setCurrentIndex((prev) => prev - 1)} type="button">Предудыдущая неделя</button>
        <button onClick={() => setCurrentIndex((prev) => prev + 1)} type="button">Следущая неделя</button>
      </div>
      {threeFreeDrugs.map((el) => <OneLittleCard key={el.id} drug={el} />)}
    </div>
  );
}
