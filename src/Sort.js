import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';
import SorterUI from './SorterUI';
import { getMergeSortAnimations } from './algorythms/merge';
import { getBubbleSortAnimations } from './algorythms/bubble';
import { getQuickSortAnimations, resetQuickSortAnimations } from './algorythms/quick';
import { getHeapSortAnimations, resetHeapSortAnimations } from './algorythms/heap';
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Sort = () => {
  const [array, setArray] = useState([]);
  const { animateSort, animateMergeSort, arraySize } = useGlobalContext();
  useEffect(() => {
    resetArray();
  }, []);
  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < arraySize; i++) {
      arr.push(randomInteger(5, 350));
    }
    resetQuickSortAnimations();
    resetHeapSortAnimations();
    setArray(arr);
  };

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);

    animateMergeSort(animations);
  };
  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(array);
    animateSort(animations);
  };
  const quickSort = () => {
    const animations = getQuickSortAnimations(array);
    animateSort(animations);
  };
  const heapSort = () => {
    const animations = getHeapSortAnimations(array);
    animateSort(animations);
  };

  return (
    <main>
      <SorterUI />

      <section className="sort">
        <div className="sort__buttons">
          <button className="sort__button" onClick={() => resetArray()}>
            Click me
          </button>
          <button className="sort__button" onClick={() => mergeSort()}>
            Merge
          </button>
          <button className="sort__button" onClick={() => bubbleSort()}>
            Bubble
          </button>
          <button className="sort__button" onClick={() => quickSort()}>
            Quick
          </button>
          <button className="sort__button" onClick={() => heapSort()}>
            Heapify
          </button>
        </div>
        <div className="sort__container">
          {array.map((value, index) => {
            return (
              <div key={index} className="sort__element" style={{ height: `${value}px` }}></div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Sort;
