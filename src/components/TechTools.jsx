import React from 'react';
import './TechTools.css';
import ToastTech from './ToastTech';

function TechTools() {
  return (
    <React.Fragment>
      <div className='TechSection'>
        <p className='TechTitle'>TECHNOLOGY, SOFTWARE AND TOOLING EXPERIENCE</p>
        <table>
          <ul>
            <h4>Languages</h4>
            <li>HTML</li>
            <li>CSS / SASS</li>
            <li>JAVASCRIPT</li>
            <li>PHP AND MYSQL</li>
            <br />
            <h4>Frameworks</h4>
            <li>BOOTSTRAP</li>
            <li>REACT JS</li>
            <br />
            <h4>Libraries/API</h4>
            <li>JQUERY</li>
            <li>REDUX</li>
            <li>NODE.JS</li>
            <br />
            <h4>Libraries/API</h4>
            <li>JQUERY</li>
            <li>REDUX</li>
            <li>NODE.JS</li>
            <br />
            <h4>Editors/IDE</h4>
            <li>VSCODE, SUBLIME</li>
            <li>ATOM, BRACKETS</li>
            <br />
            <h4>Platforms</h4>
            <li>WINDOWS / MacOS</li>
            <li>ATOM, BRACKETS</li>
            <br />
            <div className='ToastTechButton'>
            <ToastTech/>
            </div>
          </ul>
        </table>
        <div className='WebDevBlock'>
          <p className='MeetupText'>
            <a
              href='https://www.meetup.com/EssexWebDevelopers/'
              target='_blank'
            >
              I'm also a member of the Essex Web Developers monthly meetups.
              https://www.meetup.com/ EssexWebDevelopers/
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TechTools;
