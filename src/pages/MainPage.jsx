import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './MainPage.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

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
        <div class="flex-container TopSectionOne">
          <div className="LeftBackDrop">1</div>
          <div className="CenterTopDrop">2</div>
          <div className="RightBackDrop">3</div>
        </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default MainPage;
