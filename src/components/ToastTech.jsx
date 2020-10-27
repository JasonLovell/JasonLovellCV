import React from 'react';
import './ToastTech.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function ToastTech() {
  const notify = () =>
    toast(
      <p>
        <img
          src='http://www.jenyalestina.com/blog/wp-content/uploads/2019/05/web-development-1024x582.jpg'
          width='250'
          alt='frontEndDev'
        />{' '}
        <ul>
          <li>
          Adobe Creative Cloud
            <br />
            <em>(Ps, Ai, Lr, Id, XD, Premier Pro)</em>
          </li>
          <li>WordPress</li>
          <li>Responsive Web Design</li>
          <li>Chrome DevTools</li>
          <li>Google Analytics</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>CodePen / Slack</li>
        </ul>
      </p>,
      {
        position: 'top-center',
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  return (
    <React.Fragment>
      <p onClick={notify}>
        <h4 className='TechTitle2'>More tools</h4>
      </p>
      <ToastContainer
        position='top-left'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.Fragment>
  );
}

export default ToastTech;
