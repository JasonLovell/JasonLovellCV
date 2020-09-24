import React from 'react';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StatementText.css';

function StatementText() {
  return (
    <div className='StatementText'>
      <article class='typewriter'>
        <p className='StateTitle'>STATEMENT</p>
        <div class='css-typing'>
          <p>
            Hi, I'm Jason and I'm eager to gain some commercial experience in
            the field of web design and web
          </p>
          <p>
            development within either a front-end or back-end development role.
            Over the past 18 months I've
          </p>
          <p>
            been learning both front and back-end development through my own
            project work, which has included building
          </p>
          <p>
            an online customer management system with PHP, MySQL and Google Maps
            API integration along with
          </p>
          <p>
            deploying it to a live hosting environment. I've also built numerous
            JavaScript games, and more recently I've
          </p>
          <p>
            been getting to grips with React Js. I'm available for interview at
            short notice and would be able to start
          </p>
          <p className='lastText'>a new role within a few weeks.</p>
          <aside className='ProjectLinks'>
            <FontAwesomeIcon className='fa-lg' icon={faCode} />
            <a
              href='https://lovelldigital.com/coding-projects/'
              target='_blank'
            >
              <h6>&nbsp;Example projects</h6>
            </a>
          </aside>
        </div>
      </article>
    </div>
  );
}

export default StatementText;
