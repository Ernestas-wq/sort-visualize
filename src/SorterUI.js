import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { MdErrorOutline } from 'react-icons/md';
import { BsCheckBox } from 'react-icons/bs';
const SorterUI = () => {
  const { changeSize, algorythm, speed } = useGlobalContext();
  return (
    <>
      <section className="sorterUI">
        <div className="sorterUI__menu">
          <Dropdown />
          <div className="sorterUI__notifications">
            <ul>
              <li>
                Algorythm: <span>{algorythm}</span>
                {algorythm ? (
                  <BsCheckBox className="sorterUI__success" />
                ) : (
                  <MdErrorOutline className="sorterUI__error" />
                )}
              </li>
              <li>
                Speed: <span>{speed}</span>
                {speed ? (
                  <BsCheckBox className="sorterUI__success" />
                ) : (
                  <MdErrorOutline className="sorterUI__error" />
                )}
              </li>
            </ul>
          </div>
        </div>

        <input
          className="sorterUI__range"
          type="range"
          id="range"
          onChange={e => changeSize(e.target.value)}
        />
        <div className="sorterUI__label">
          <label htmlFor="range">Adjust array</label>
        </div>
      </section>
    </>
  );
};

const Dropdown = () => {
  const { dropdowns, toggleDropdown } = useGlobalContext();

  return (
    <>
      {dropdowns.map((dropdown, index) => {
        console.log('hello');
        const { name, options, show, id } = dropdown;
        return (
          <div className="sorterUI__dropdown" key={index} id={index}>
            <p>{name}</p>
            <button className="sorterUI__toggle" onClick={() => toggleDropdown(id)}>
              {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            <div
              className="sorterUI__options"
              style={{ opacity: `${show ? '1' : '0'}`, top: `${show ? '26px' : '0'}` }}
            >
              {options.map((option, index) => {
                return (
                  <li key={index}>
                    <button
                      className="sorterUI__option"
                      onClick={e => {
                        console.log(e.target.textContent);
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
