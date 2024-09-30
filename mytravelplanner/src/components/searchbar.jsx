// SearchBar.js
import React, { useState } from "react";
import searchicon from '../assets/icons/search.png'

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // This function will handle the search action
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-10">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-1 mb-1 mr-2 text-gray-600"
        >
         <img src={searchicon} alt="" className="" />
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
