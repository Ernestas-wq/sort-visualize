import React, { useState, useContext } from 'react';
const AppContext = React.createContext();
const ANIMATION_SPEED_MS = 10;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#8338ec';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = '#06d6a0';
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [arraySize, setArraySize] = useState(50);
  const [algorythm, setAlgorythm] = useState('');
  const [speed, setSpeed] = useState('');

  const [dropdowns, setDropdowns] = useState([
    {
      id: 0,
      name: 'algorythm',
      show: false,
      options: ['bubble sort', 'merge sort', 'quick sort', 'heap sort'],
    },
    {
      id: 1,
      name: 'speed',
      show: false,
      options: ['slow', 'medium', 'fast'],
    },
  ]);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const fillOptions = options => {
    setOptions(options);
  };
  const toggleDropdown = id => {
    dropdowns[id]['show'] = !dropdowns[id]['show'];
    const newDropdowns = [...dropdowns];
    setDropdowns(newDropdowns);
  };

  const changeSize = size => {
    let newSize = parseInt(size);
    if (newSize > 90) {
      newSize = 90;
    } else if (newSize < 10) {
      newSize = 10;
    }
    setArraySize(newSize);
  };
  const changeSpeed = speed => {
    setSpeed(speed);
  };

  const animateMergeSort = animations => {
    const arrayBars = document.getElementsByClassName('sort__element');
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const animateSort = animations => {
    const arrayBars = document.getElementsByClassName('sort__element');
    for (let i = 0; i < animations.length; i++) {
      const isSwapping = animations[i]['swap'];
      const [barOneIdx, barTwoIdx] = animations[i]['indexes'];
      const revertColor = animations[i]['revertColor'];
      const color = revertColor ? PRIMARY_COLOR : SECONDARY_COLOR;
      setTimeout(() => {
        arrayBars[barOneIdx].style.backgroundColor = color;
        arrayBars[barTwoIdx].style.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
      if (isSwapping) {
        const [height1, height2] = animations[i]['heights'];
        setTimeout(() => {
          arrayBars[barOneIdx].style.height = `${height2}px`;
          arrayBars[barTwoIdx].style.height = `${height1}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        animateSort,
        animateMergeSort,
        options,
        fillOptions,
        dropdowns,
        toggleDropdown,
        arraySize,
        changeSize,
        algorythm,
        speed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
