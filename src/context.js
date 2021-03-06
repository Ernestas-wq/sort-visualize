import React, { useState, useContext, useCallback } from 'react';
import { darkmode } from './utils/darkmode';
const AppContext = React.createContext();
const speeds = {
  slow: 90,
  medium: 45,
  fast: 10,
};
const colorsPallet = {
  primary: '#ef476f',
  secondary: '#06d6a0',
};

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [arraySize, setArraySize] = useState(50);
  const [algorythm, setAlgorythm] = useState('');
  const [speed, setSpeed] = useState('');
  const [speedMS, setSpeedMS] = useState(0);
  const [isSorting, setIsSorting] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ show: false, msg: '' });
  const [colors, setColors] = useState(colorsPallet);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [dropdowns, setDropdowns] = useState([
    {
      id: 0,
      name: 'algorythm',
      show: false,
      options: ['bubble sort', 'merge sort', 'quick sort', 'heap sort', 'insertion sort'],
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

  const toggleDropdown = id => {
    dropdowns[id]['show'] = !dropdowns[id]['show'];
    const newDropdowns = [...dropdowns];
    setDropdowns(newDropdowns);
  };

  const changeSize = size => {
    let newSize = parseInt(size);
    if (!isSorting) {
      setArraySize(newSize);
    }
  };
  const changeSpeed = speed => {
    setSpeed(speed);
    setSpeedMS(speeds[speed]);
  };
  const changeAlgorythm = algorythm => {
    setAlgorythm(algorythm);
  };
  const toggleSorterState = animations => {
    setIsSorting(true);
    setTimeout(() => {
      setIsSorting(false);
    }, animations.length * speedMS);
  };

  const changeErrorMessage = useCallback(
    (show, msg) => {
      setErrorMessage({ show, msg });
    },
    [errorMessage]
  );

  const toggleDarkMode = () => {
    darkmode();
    setIsDarkMode(!isDarkMode);
  };
  const animateMergeSort = animations => {
    const arrayBars = document.getElementsByClassName('sort__element');
    toggleSorterState(animations);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? colors.secondary : colors.primary;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * speedMS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * speedMS);
      }
    }
  };
  const animateSort = animations => {
    const arrayBars = document.getElementsByClassName('sort__element');
    toggleSorterState(animations);

    for (let i = 0; i < animations.length; i++) {
      const isSwapping = animations[i]['swap'];
      const [barOneIdx, barTwoIdx] = animations[i]['indexes'];
      const revertColor = animations[i]['revertColor'];
      const color = revertColor ? colors.primary : colors.secondary;
      setTimeout(() => {
        arrayBars[barOneIdx].style.backgroundColor = color;
        arrayBars[barTwoIdx].style.backgroundColor = color;
      }, i * speedMS);
      if (isSwapping) {
        const [height1, height2] = animations[i]['heights'];
        setTimeout(() => {
          arrayBars[barOneIdx].style.height = `${height2}px`;
          arrayBars[barTwoIdx].style.height = `${height1}px`;
        }, i * speedMS);
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
        dropdowns,
        toggleDropdown,
        arraySize,
        changeSize,
        algorythm,
        speed,
        changeSpeed,
        changeAlgorythm,
        isSorting,
        errorMessage,
        changeErrorMessage,
        isDarkMode,
        toggleDarkMode,
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
