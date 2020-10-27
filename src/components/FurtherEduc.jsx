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
            <a
              href='https://www.thephotographyinstitute.co.uk/'
              target='_blank'
            >
              (https://www.thephotographyinstitue.co.uk/)
            </a>
          </p>
          <hr />
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
            <a
              href='https://www.southessex.ac.uk/news/farewell-thurrock-tech'
              target='_blank'
            >
              (southessex.uk/news/farewell-thurrock-tech)
            </a>
          </p>
          <hr />
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
          <p className='EduEmail'>
            <a href='https://www.uspcollege.ac.uk/' target='_blank'>
              (https://www.uspcollegeac.uk/)
            </a>
          </p>
        </div>
      </div>
      <div className='FurtherEduBlock'>
        <p className='FurtherEduIcon'>
          <FontAwesomeIcon className='fa-lg' icon={faBriefcase} />
        </p>
        <p className='FurtherItemText'>
          <p>WORK EXPERIENCE</p>
        </p>
        <div class='vl2' />
        <div className='EducationTextBlock'>
          <p className='EduName'>Photographer, Web &amp; Graphic designer</p>
          <p className='EduDetail'>
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCity}
              size='1x'
            />
            Lovell Photography &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCalendarAlt}
              size='1x'
            />
            2007 - Current
          </p>
          <p className='EduEmail'>
            <a href='https://lovelldigital.com/' target='_blank'>
              (https://lovelldigital.com/)
            </a>
          </p>
          <p className='WETextTitle'>Portrait and wedding photographer.</p>
          <p className='WETextText'>
            <strong>Job role included:</strong> Marketing, photography and
            editing, client safety and care. Managing all legal and financial
            aspects.
          </p>
          <hr />
          <br />
          <p className='EduName'>FABRICATOR &amp; MACHINE OPERATOR</p>
          <p className='EduDetail'>
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCity}
              size='1x'
            />
            Fortress Aluminium &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCalendarAlt}
              size='1x'
            />
            2016 - 2020
          </p>
          <p className='EduEmail'>
            <a href='https://fortressaluminium.com/' target='_blank'>
              (https://fortressaluminium.com/)
            </a>
          </p>
          <p className='WETextTitle'>Aluminium door &amp; window fabricator.</p>
          <p className='WETextText'>
            <strong>Job role included:</strong> CNC (computer numerical control)
            operation, preparation &amp; routing of all factory projects.
            Assembly, delivery and servicing.
          </p>
          <hr />
          <br />
          <p className='EduName'>SOLE TRADER - CAFÉ OWNER</p>
          <p className='EduDetail'>
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCity}
              size='1x'
            />
            Wickford Diner &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              className='fa-lg ItemIcon'
              icon={faCalendarAlt}
              size='1x'
            />
            2004 - 2015
          </p>
          <p className='EduEmail'>
            <a href='https://www.facebook.com/Shotgatecafe/' target='_blank'>
              (https://www.facebook.com/Shotgatecafe/)
            </a>
          </p>
          <p className='WETextTitle'>Restaurant manager and chef.</p>
          <p className='WETextText'>
            <strong>Job role included:</strong> Responsible for leading and
            managing the restaurant and employees. Head of kitchen, controlling
            and directing the food preparation process.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FurtherEduc;
