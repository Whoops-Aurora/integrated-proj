// Search.js

import React, { useState } from 'react';
import { employeesData } from '../../data';

function Search({ setFilteredMembers, setFilteredEmployees }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); // Prevents the form from submitting and causing a page reload
    const searchTerm = searchQuery.toLowerCase();
    const filtered = employeesData.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(searchTerm) ||
        employee.sem.toString().includes(searchTerm) ||
        employee.role.toLowerCase().includes(searchTerm)
      );
    });

    setFilteredMembers(filtered);
  };

  return (
    <div className="small-container">
      <form onSubmit={handleSearch}>
        <h1>Search Member</h1>
        <label htmlFor="searchQuery">Search by Name, Semester, or Role</label>
        <input
          id="searchQuery"
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Search" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Back"
            onClick={() => setFilteredEmployees(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
