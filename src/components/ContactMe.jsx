import React from 'react';
import { Button } from 'react-bootstrap';
import { faGlobeEurope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactMe.css';

function ContactMe() {
  return (
    <React.Fragment>
      <div className="ContactBlock">
      <div className='horizontal-list'>
        <p>
          <p className='itemIcon'>
            <FontAwesomeIcon className='fa-lg' icon={faGlobeEurope} />
          </p>
        </p>
        <p className='itemText'>
          <div>lovelldigital.com</div>
          <div>contact@lovelldigital.com</div>
        </p>
      </div>

      <div className='horizontal-list'>
        <p>
          <p className='itemIcon'>
            <FontAwesomeIcon className='fa-lg' icon={faMobileAlt} />
          </p>
        </p>
        <li className='itemText'>
          <div>(01268)&nbsp;733&nbsp;530<br />(0)&nbsp;7887&nbsp;592&nbsp;013</div>
        </li>
      </div>
      </div>
    </React.Fragment>
  );
}

export default ContactMe;
