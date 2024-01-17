import React from 'react'
import './Header.css'

function Header({ setIsAdding , setFilteredEmployees }) {
    return (
        <header>
            <h1>ASSOCIATION MEMBER MANAGEMENT</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px'}}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Member</button>
                <button onClick={() => setFilteredEmployees(true)} className='round-button'>Search Member</button>
                
            </div>
        </header>
    )
}

export default Header