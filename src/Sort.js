import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';
import SorterUI from './SorterUI';
import { getMergeSortAnimations } from './algorythms/merge';
import { getBubbleSortAnimations } from './algorythms/bubble';
import { getInsertionSortAnimations } from './algorythms/insertion';
import { getQuickSortAnimations, resetQuickSortAnimations } from './algorythms/quick';
import { getHeapSortAnimations, resetHeapSortAnimations } from './algorythms/heap';

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Sort = () => {
  const [array, setArray] = useState([]);
  const { animateSort, animateMergeSort, arraySize, isSorting } = useGlobalContext();
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
    const animations = getMergeSortAnimations([...array]);
    animateMergeSort(animations);
  };
  const bubbleSort = () => {
    const animations = getBubbleSortAnimations([...array]);
    animateSort(animations);
  };
  const quickSort = () => {
    const animations = getQuickSortAnimations([...array]);
    animateSort(animations);
  };
  const heapSort = () => {
    const animations = getHeapSortAnimations([...array]);
    animateSort(animations);
  };
  const insertionSort = () => {
    const animations = getInsertionSortAnimations([...array]);
    animateSort(animations);
  };
  return (
    <main>
      <SorterUI
        mergeSort={mergeSort}
        heapSort={heapSort}
        bubbleSort={bubbleSort}
        quickSort={quickSort}
        insertionSort={insertionSort}
      />

      <section className="sort">
        <div className="sort__container">
          {isSorting && (
            <div className="sort__spinner">
              <div></div>
              <p>Sorting...</p>
            </div>
          )}
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
