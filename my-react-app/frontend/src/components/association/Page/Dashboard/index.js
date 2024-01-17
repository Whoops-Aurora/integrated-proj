import React, { useState,useEffect } from 'react';
import Swal from 'sweetalert2';
import './index.css'
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import Search from './Search';

import { employeesData } from '../../data';

function Dashboard() {
    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [filteredMembers, setFilteredMembers] = useState([]);
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);
        setSelectedEmployee(employee);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.name}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    };

    const handleSearch = () => {
        setIsSearching(true);
    };

    const handleSearchBack = () => {
        setIsSearching(false);
        setFilteredMembers([]);
    };
    useEffect(() => {
        // Change background image every 5 seconds
        const intervalId = setInterval(() => {
          setBackgroundIndex((prevIndex) => (prevIndex + 1) % totalBackgrounds);
        }, 5000);
    
        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []); // Empty dependency array ensures the effect runs only once on mount
    
      const totalBackgrounds = 4; // Adjust based on the number of background images
      const backgroundImageStyle = {
        backgroundImage: `url('main1.jpg')`,
      };
      

    return (
        <div className='container'>
            <Header setIsAdding={setIsAdding} setFilteredEmployees={handleSearch} />

            {isAdding && <Add employees={employees} setEmployees={setEmployees} setIsAdding={setIsAdding} />}
            {isEditing && <Edit employees={employees} selectedEmployee={selectedEmployee} setEmployees={setEmployees} setIsEditing={setIsEditing} />}
            
            {isSearching && (
        <Search
          setFilteredMembers={setFilteredMembers}
          setFilteredEmployees={handleSearchBack}
          employees={employees}
        />
      )}

            {isSearching && filteredMembers.length > 0 && <List employees={filteredMembers} handleEdit={handleEdit} handleDelete={handleDelete} />}
            
            {!isAdding && !isEditing && !isSearching && <List employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} />}
            
            {isSearching && filteredMembers.length === 0 && <p>No matching members found.</p>}
        </div>
    );
}

export default Dashboard;
