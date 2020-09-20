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
        <div className='section group'>
          <div className='col span_1_of_3 leftContact'>
            <ContactMe />
          </div>
          <div className='col span_1_of_3 middleContact'>
            <CvSection />
          </div>
          <div className='col span_1_of_3 rightContact'>
            <ProfileTop />
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default MainPage;
