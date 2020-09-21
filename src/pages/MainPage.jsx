import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './MainPage.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ContactMe from '../components/ContactMe';
import CvSection from '../components/CvSection';
import ProfileTop from '../components/ProfileTop';
import JldLink from '../components/JldLink';
import NameTitle from '../components/NameTitle';
import StatementText from '../components/StatementText';
import TechTools from '../components/TechTools';

function MainPage() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/HomePage' component={HomePage} />
          <Route path='/AboutPage' component={AboutPage} />
          <Route path='/ContactPage' component={ContactPage} />
        </Switch>

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
          <div class='ClearGreen'>ClearGreen</div>
          <div class='StatementText'>
            <StatementText />
          </div>
          <div class='StateClearGreen'>StateClearGreen</div>
          <div class='TechTools'><TechTools /></div>
          <div class='FurtherEduc'>FurtherEduc</div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default MainPage;
