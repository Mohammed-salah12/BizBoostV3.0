import React from "react";
import "../assets/Sidebar.css";

const Sidebar = ({
  categories,
  onCategoryChange,
  selectedCategories,
  searchTerm,
  onSearchChange,
}) => {
  const handleCheckboxChange = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className="sidebar">
      <h2>Volunteer Profiles</h2>
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <ul className="categories">
        {categories.map((category, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />{" "}
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
