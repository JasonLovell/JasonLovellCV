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
            <h4>Front-End</h4>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <br />
            <h4>Back-End</h4>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>MySql</li>
            <br />
            <h4>Frameworks</h4>
            <li>React</li>
            <li>jQuery</li>
            <li>Twitter Bootstrap</li>
            <br />
            <h4>Editors/IDE</h4>
            <li>VSCode, Atom</li>
            <br />
            <h4>Platforms</h4>
            <li>Windows </li>
            <br />
            <h4>Other</h4>
            <li>Version control/Git</li>
            <li>GitHub</li>
            <li>Sass</li>
            <li>Browser Developer Tools</li>
            <li>Command Line</li>
            <li>Node.js</li>
            <li>npm / Webpack</li>
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
              I'm a member of the Essex Web Developers group on Meetup.com and attend the meetups every month
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TechTools;
