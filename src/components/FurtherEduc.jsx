import React from 'react';
import './FurtherEduc.css';
import {
  faGraduationCap,
  faCalendarAlt,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FurtherEduc() {
  return (
    <React.Fragment>
      <div className='EduBlock'>
        <p className='EduTitle'>
          <FontAwesomeIcon
            className='fa-lg ItemIconLarge'
            icon={faGraduationCap}
            size='2x'
          />
          <div class='vl'></div> FURTHER EDUCATION
        </p>

        <div className='EducationDetails'>
          <p className='EduName'>PHOTOGRAPHY INSTITUTE</p>
          <p className='EduDetail'>
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faSchool}
              size='1x'
            />
            Online. London Based &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCalendarAlt}
              size='1x'
            />
            2011 - 2012
          </p>
          <p className='EduEmail'>
            (https://www.thephotographyinstitue.co.uk/)
          </p>
        </div>

        <div className='EducationDetails'>
          <p className='EduName'>'A' LEVEL ART &amp; DESIGN</p>
          <p className='EduDetail'>
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faSchool}
              size='1x'
            />
            Thurrock Tec College &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCalendarAlt}
              size='1x'
            />
            1988 - 1990
          </p>
          <p className='EduEmail'>
            (southessex.uk/news/farewell-thurrock-tech)
          </p>
        </div>

        <div className='EducationDetails'>
          <p className='EduName'>BTEC BUSINESS &amp; ENTERPRISE</p>
          <p className='EduDetail'>
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faSchool}
              size='1x'
            />
            Palmers College &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCalendarAlt}
              size='1x'
            />
            1986 - 1988
          </p>
          <p className='EduEmail'>(https://www.uspcollegeac.uk/)</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FurtherEduc;
