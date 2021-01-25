import React, { useEffect } from 'react';
import { useGlobalContext } from './context';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { MdErrorOutline } from 'react-icons/md';
import { BsCheckBox } from 'react-icons/bs';

const SorterUI = ({ mergeSort, heapSort, bubbleSort, quickSort, insertionSort, resetArray }) => {
  const {
    changeSize,
    algorythm,
    speed,
    isSorting,
    changeErrorMessage,
    errorMessage,
  } = useGlobalContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      changeErrorMessage(false, '');
    }, 2000);
    return () => clearTimeout(timeout);
  }, [changeErrorMessage]);

  return (
    <>
      <section className="sorterUI">
        <div className="sorterUI__menu">
          <div className="sorterUI__range">
            <div>
              <input
                type="range"
                id="range"
                min="10"
                max="90"
                onChange={e => changeSize(e.target.value)}
              />
            </div>
          </div>
          <Dropdown />
          {errorMessage.show && (
            <div className="sorterUI__error-message">
              <p>{errorMessage.msg}</p>
            </div>
          )}
          <div className="sorterUI__notifications">
            <ul>
              <li>
                Algorythm: <span>{algorythm}</span>
                {algorythm && !isSorting ? (
                  <BsCheckBox className="sorterUI__success" />
                ) : (
                  <MdErrorOutline className="sorterUI__error" />
                )}
              </li>
              <li>
                Speed: <span>{speed}</span>
                {speed && !isSorting ? (
                  <BsCheckBox className="sorterUI__success" />
                ) : (
                  <MdErrorOutline className="sorterUI__error" />
                )}
              </li>
            </ul>
          </div>
        </div>
        <button
          className={`${
            isSorting ? 'sorterUI__reset sorterUI__reset--inactive' : 'sorterUI__reset'
          }`}
          onClick={() => {
            if (!isSorting) {
              resetArray();
            }
          }}
        >
          Reset Array
        </button>
        <button
          className={`${
            isSorting ? 'sorterUI__start sorterUI__start--inactive' : 'sorterUI__start'
          }`}
          onClick={() => {
            if (algorythm && speed && !isSorting) {
              if (algorythm === 'bubble sort') {
                bubbleSort();
              } else if (algorythm === 'heap sort') {
                heapSort();
              } else if (algorythm === 'merge sort') {
                mergeSort();
              } else if (algorythm === 'quick sort') {
                quickSort();
              } else if (algorythm === 'insertion sort') {
                insertionSort();
              }
            }
            if (!speed || !algorythm) {
              changeErrorMessage(true, 'Please Select Values');
            }
          }}
        >
          Sort it
        </button>
      </section>
    </>
  );
};

const Dropdown = () => {
  const { dropdowns, toggleDropdown, changeSpeed, changeAlgorythm } = useGlobalContext();

  const handleChange = name => {
    return name;
  };

  return (
    <>
      {dropdowns.map((dropdown, index) => {
        const { name, options, show, id } = dropdown;
        return (
          <div className="sorterUI__dropdown" key={index} id={index}>
            <p>{name}</p>
            <button className="sorterUI__toggle" onClick={() => toggleDropdown(id)}>
              {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            <div
              className="sorterUI__options"
              style={{
                transform: `${show ? 'translateY(30%)' : 'translateY(-100%)'}`,
                opacity: `${show ? '1' : '0'}`,
              }}
            >
              {options.map((option, index) => {
                return (
                  <li key={index}>
                    <button
                      className="sorterUI__option"
                      onClick={e => {
                        if (handleChange(name) === 'algorythm') {
                          changeAlgorythm(e.target.textContent);
                        } else if (handleChange(name) === 'speed') {
                          changeSpeed(e.target.textContent);
                        }
                        toggleDropdown(id);
                      }}
                    >
                      {option}
                    </button>
                  </li>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default SorterUI;
