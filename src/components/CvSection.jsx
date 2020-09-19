import React from 'react';
import logo from '../components/assets/logoCV.png';
import './CvSection.css';

function CvSection() {
  return (
    <div>
      <div className='SectionBox'>
        <img className='CvLogo' src={logo} alt='Logo' width='150' />
      </div>
      <div>
        <p className='CvText'>Curriculum vitae</p>
      </div>
    </div>
  );
}

export default CvSection;
