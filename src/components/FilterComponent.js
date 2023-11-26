import React, { useState } from "react";

const FilterComponent = ({ items, handleFilterChange, filter }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleFilter = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="filterComponent">
      <h4 className="filterName" onClick={toggleFilter}>
        {filter}
        <span>{isExpanded ? "-" : "+"}</span>
      </h4>
      <div className={`filter-items ${isExpanded ? "expanded" : ""}`}>
        {items.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`${item.name}${index}`}
              value={item.name}
              checked={item.checked}
              onChange={() => handleFilterChange(index, item.type)}
            />
            <label htmlFor={`${item.name}${index}`}>{item.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
