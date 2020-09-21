import React from 'react';
import './FurtherEduc.css';
import { Button } from 'react-bootstrap';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FurtherEduc() {
  return (
    <React.Fragment>
      <div className='EduBlock'>
        <p className='EduTitle'>
          <FontAwesomeIcon
            className='fa-lg ItemIcon'
            icon={faGraduationCap } 
            size="2x" 
          />{' '}
          FURTHER EDUCATION
        </p>
      </div>
    </React.Fragment>
  );
}

export default FurtherEduc;
