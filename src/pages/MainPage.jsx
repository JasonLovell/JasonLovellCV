import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './MainPage.css';
import ContactMe from '../components/ContactMe';
import CvSection from '../components/CvSection';
import ProfileTop from '../components/ProfileTop';
import JldLink from '../components/JldLink';
import NameTitle from '../components/NameTitle';
import StatementText from '../components/StatementText';
import TechTools from '../components/TechTools';
import FurtherEduc from '../components/FurtherEduc';

function MainPage() {
  return (
    <React.Fragment>
      <Router>
        <div class='grid-container'>
          <div class='ContactDetails'>
            <ContactMe />
          </div>
          <div class='CvTitle'>
            <CvSection />
          </div>
          <div class='ProfilePic'>
            <ProfileTop />
          </div>
          <div class='BackGroundMix'>
            <JldLink />
          </div>
          <div class='NameText'>
            <NameTitle />
          </div>
          <div class='ClearGreen'></div>
          <div class='StatementText'>
            <StatementText />
          </div>
          <div class='TechTools'>
            <TechTools />
          </div>
          <div class='FurtherEduc'>
            <FurtherEduc />
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default MainPage;
