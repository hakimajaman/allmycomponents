import React from 'react';
import {Link} from 'react-router-dom';
import "../../assets/sass/SidebarComponents/SidebarComponent1.scss";

//svg
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const SidebarComponent = () => {

  return (
    <div className="sidebar-container">
      <div className="sidebar-navigation">
        <img src={require('../../assets/images/png/iconfinder-videologoplayicon-3993847_112649.png')} alt="logo" />
        <div className="burger">
          <div className="burger1"></div>
          <div className="burger2"></div>
          <div className="burger3"></div>
        </div>
      </div>
      <div className="sidebar-menu">
        <div className="sub-menu">
          <h3>MAIN NAVIGATION</h3>
          <div>
            <div className="sub-menu-list">
              <div className="flex-center">
                <FontAwesomeIcon icon={['fas', 'rocket']} className="sub-menu-icon" />
                <p><Link to="#">Dashboard</Link></p>
              </div>
              <ul>
                <li>Analytics</li>
                <li>Advertisement</li>
                <li>Management</li>
                <li>Helpdesk</li>
                <li>Monitoring</li>
                <li>Crypto</li>
                <li>Project Management</li>
                <li>Product</li>
                <li>Statistics</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="sub-menu-list">
              <div className="flex-center">
                <FontAwesomeIcon icon={['fas', 'rocket']} className="sub-menu-icon" />
                <p><Link to="#">Dashboard</Link></p>
              </div>
              <ul>
                <li>Analytics</li>
                <li>Advertisement</li>
                <li>Management</li>
                <li>Helpdesk</li>
                <li>Monitoring</li>
                <li>Crypto</li>
                <li>Project Management</li>
                <li>Product</li>
                <li>Statistics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default SidebarComponent;
