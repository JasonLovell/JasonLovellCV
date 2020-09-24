// import React from 'react';
// import profile from '../components/assets/profile.jpg';
// import './ProfileTop.css';

// function ProfileTop() {
//   return (
//     <div>
//       <img className='CvProfile' src={profile} alt='Profile' width='200' />
//     </div>
//   );
// }

// export default ProfileTop;

import React from 'react';
import './ProfileTop.css';

class ProfileTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc:
        'https://lovelldigital.com/wp-content/uploads/2020/09/profile-e1600871605653.jpg',
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      imgSrc:
        'https://lovelldigital.com/wp-content/uploads/2020/09/profilecolor-e1600871630974.jpg',
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc:
        'https://lovelldigital.com/wp-content/uploads/2020/09/profile-e1600871605653.jpg',
    });
  }

  render() {
    return (
      <div>
        <img
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          src={this.state.imgSrc}
          className='CvProfile'
        />
      </div>
    );
  }
}

ProfileTop.propTypes = {};

ProfileTop.defaultProps = {};

export default ProfileTop;
