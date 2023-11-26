// SortComponent.js - Component for sorting

import React from 'react';

const SortComponent = ({ setSortType }) => {
  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className="sort-section">
      <label htmlFor="sort">Sort by Price: </label>
      <select id="sort" onChange={handleSortChange}>
        <option value="">Select</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortComponent;
