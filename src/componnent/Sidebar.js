// src/components/Sidebar.js
import React from "react";
import "../assets/Sidebar.css";

const Sidebar = ({ categories }) => {
  return (
    <div className="sidebar">
      <h2>Business Profiles</h2>
      <input type="text" placeholder="Search..." className="search-bar" />
      <ul className="categories">
        {categories.map((category, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" /> {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
