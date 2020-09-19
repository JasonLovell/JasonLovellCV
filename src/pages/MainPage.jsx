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

        <div>
          <div class='flex-container'>
            <div className='LeftBackDrop'>
              <ContactMe />
            </div>
            <div className='CenterTopDrop'>
              <CvSection />
            </div>
            <div className='RightBackDrop'>
              <ProfileTop />
            </div>
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default MainPage;
