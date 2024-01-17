import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [name, setName] = useState(selectedEmployee.firstName);
    const [sem, setSem] = useState(selectedEmployee.lastName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [domain, setDomain] = useState(selectedEmployee.salary);
    const [skill, setSkill] = useState(selectedEmployee.date);
    const [role, setRole] = useState(selectedEmployee.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!name || !sem || !email || !domain || !skill || !role) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            name,
            sem,
            email,
            domain,
            skill,
            role
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.name}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Update</h1>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="sem">Sem</label>
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
                <label htmlFor="domain">Domain ($)</label>
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
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Back"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit