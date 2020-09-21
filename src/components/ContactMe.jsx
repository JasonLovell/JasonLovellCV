import React from 'react';
import './ContactMe.css';
import { Button } from 'react-bootstrap';

import {
  faAddressBook,
  faMapMarkerAlt,
  faGlobeEurope,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactMe() {
  return (
    <section>
      <table>
        <ul className='horizontal-list'>
          <li>
            <Button className='itemIcon'>
              <FontAwesomeIcon className='fa-lg' icon={faGlobeEurope} />
            </Button>
            </li>
            <li className='itemText'>
              <div>lovelldigital.com</div>
              <div>contact@lovelldigital.com</div>
          </li>
        </ul>
        <ul className='horizontal-list'>
          <li>
            <Button className='itemIcon'>
              <FontAwesomeIcon className='fa-lg' icon={faMobileAlt} />
            </Button>
            </li>
            <li className='itemText'>
              <div>(01268) 733 530</div>
              <div>(0) 7887 592 013</div>
            </li>
          
        </ul>
      </table>
    </section>
  );
}

export default ContactMe;
