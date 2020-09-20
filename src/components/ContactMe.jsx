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
    <div className='textBlock'>
      <section>
        <p>
          <Button className='itemOneText'>
            <FontAwesomeIcon className='fa-lg' icon={faAddressBook} />
          </Button>
          <h5 className='itemTwoText'>CONTACT ME</h5>
        </p>

        <p>
          <Button className='itemTwo'>
            <FontAwesomeIcon className='fa-lg' icon={faMapMarkerAlt} />
          </Button>
          <p className='itemTwo'>
            <div>35 Alicia Avenue,</div>
            <div>Wickford, Essex.</div>
          </p>
        </p>
        <p>
          <Button className='itemThree'>
            <FontAwesomeIcon icon={faGlobeEurope} />
          </Button>
          <p className='itemTwo'>
            <div>lovelldigital.com</div>
            <div>contact@lovelldigital.com</div>
          </p>
        </p>
        <p>
          <Button className='itemTwo'>
            <FontAwesomeIcon className='fa-lg' icon={faMobileAlt} />
          </Button>
          <p className='itemTwo'>
            <div>(01268) 733 530</div>
            <div>(0) 7887 592 013</div>
          </p>
        </p>
      </section>
    </div>
  );
}

export default ContactMe;
