import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';
import './Add.css'

function Add({ employees, setEmployees, setIsAdding }) {

    const [name, setName] = useState('');
    const [sem, setSem] = useState('');
    const [email, setEmail] = useState('');
    const [domain, setDomain] = useState('');
    const [skill, setSkill] = useState('');
    const [role, setRole] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!name || !sem || !email || !domain || !skill || !role) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            name,
            sem,
            email,
            domain,
            skill,
            role
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${name}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    ref={textInput}
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="sem">Semester</label>
                <input
                    id="sem"
                    type="number"
                    name="sem"
                    value={sem}
                    onChange={e => setSem(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="domain">Domain</label>
                <input
                    id="domain"
                    type="text"
                    name="domain"
                    value={domain}
                    onChange={e => setDomain(e.target.value)}
                />
                <label htmlFor="skill">Skill</label>
                <input
                    id="skill"
                    type="text"
                    name="skill"
                    value={skill}
                    onChange={e => setSkill(e.target.value)}
                />
                <label htmlFor="role">Role</label>
                <input
                    id="role"
                    type="text"
                    name="role"
                    value={role}
                    onChange={e => setRole(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Back"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add