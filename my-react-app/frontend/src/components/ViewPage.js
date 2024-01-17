// // ViewPage.js
import React, { useEffect, useState } from 'react';
 import { Link } from 'react-router-dom';
import './ViewPage.css'; // Import your CSS file
import { getClubs } from './services/api';
const ViewPage = () => {

  const [clubs, setClubs] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getClubs().then((data)=>setClubs(data));
  },[reload]);

  return (
    <div className='page-main'>
    <div className='box-ele-main'>
      {clubs.map((module, index) => (
        <Link
        // href={module.path}
        key={index}
        className='module-link-main'
        to={`/${module.title}`}
        target='_blank'
        rel='noopener noreferrer'
      >
          <div className='module-main'>
            <div className='tag1-main'>
            <img src={module.image} alt={module.name} className='module-image-main' />
            </div>
            <div className='tag2-main'>
            <div className='module-details-main'>
              <h3>
                {module.title}
                <span>&#8594;</span>
              </h3>
              <p>{module.description}</p>
            </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}

export default ViewPage;
