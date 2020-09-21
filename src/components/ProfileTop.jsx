import React from 'react';
import profile from '../components/assets/profile.jpg';
import './ProfileTop.css';

function ProfileTop() {
  return (
    <div>
      <img className='CvProfile' src={profile} alt='Profile' width='230' />
    </div>
  );
}

export default ProfileTop;
