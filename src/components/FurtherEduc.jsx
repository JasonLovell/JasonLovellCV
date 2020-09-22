import React from 'react';
import './FurtherEduc.css';
import {
  faGraduationCap,
  faCalendarAlt,
  faSchool,
  faCity,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FurtherEduc() {
  return (
    <React.Fragment>
      <div className='FurtherEduBlock'>
        <p className='FurtherEduIcon'>
          <FontAwesomeIcon className='fa-lg' icon={faGraduationCap} />
        </p>
        <p className='FurtherItemText'>
          <p>&nbsp;&nbsp;&nbsp;FURTHER EDUCATION</p>
        </p>
        <div class='vl' />
        <div className='EducationTextBlock'>
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
      <div className='FurtherEduBlock'>
        <p className='FurtherEduIcon'>
          <FontAwesomeIcon className='fa-lg' icon={faBriefcase} />
        </p>
        <p className='FurtherItemText'>
          <p>WORK EXPERIENCE</p>
        </p>
        <div class='vl' />
        <div className='EducationTextBlock'>
          <p className='EduName'>Photographer, Web &amp; Graphic designer</p>
          <p className='EduDetail'>
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCity}
              size='1x'
            />
            LOVELL PHOTOGRAPHY &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCalendarAlt}
              size='1x'
            />
            2007 - Current
          </p>
          <p className='EduEmail'>(https://lovelldigital.com/)</p>
          <p className='WETextTitle'>Portrait and wedding photographer.</p>
          <p className='WETextText'>
            <strong>Job role included:</strong> Marketing, Photography and
            editing, Client safety and care. Managing all legal and financial
            aspects.
          </p>
          <p className='EduName'>FABRICATOR &amp; MACHINE OPERATOR</p>
          <p className='EduDetail'>
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCity}
              size='1x'
            />
            FORTRESS ALUMINIUM &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCalendarAlt}
              size='1x'
            />
            2016 - 2020
          </p>
          <p className='EduEmail'>(https://fortressaluminium.com/)</p>
          <p className='WETextTitle'>Aluminium door &amp; window fabricator.</p>
          <p className='WETextText'>
            <strong>Job role included:</strong> CNC (computer numerical control)
            operation, preparation &amp; routing of all factory projects.
            Assembly, delivery and servicing.
          </p>
          <p className='EduName'>SOLE TRADER - CAFÉ OWNER</p>
          <p className='EduDetail'>
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCity}
              size='1x'
            />
            WICKFORD DINER &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCalendarAlt}
              size='1x'
            />
            2004 - 2015
          </p>
          <p className='EduEmail'>(https://www.facebook.com/Shotgatecafe/)</p>
          <p className='WETextTitle'>Restaurant manager and Chef.</p>
          <p className='WETextText'>
            <strong>Job role included:</strong> Responsible for leading and
            managing the restaurant and employees. Head of Kitchen, controlling
            and directing the food preparation process.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FurtherEduc;
