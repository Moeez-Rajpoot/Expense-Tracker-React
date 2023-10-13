import React, { useState, useRef } from 'react';
import './ExpenseFilter.css';

function ExpenseFilter() {
  const options = ['2020', '2021', '2022', '2023'];
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
    <div className="filter">
      <h3>Filter By Year</h3>
      <div className="custom-dropdown" onClick={toggleDropdown}>
        <div className={`dropdown-toggle ${isDropdownOpen ? 'open' : ''}`}>
          {selectedOption || 'Select Year'}
        </div>
        <ul className={`dropdown-list ${isDropdownOpen ? 'open' : ''}`} ref={dropdownRef}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelectChange(option)}
              className={option === selectedOption ? 'selected' : ''}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      
    </div>
    <p>Selected Option: {selectedOption}</p>
    </>
  );
}

export default ExpenseFilter;
