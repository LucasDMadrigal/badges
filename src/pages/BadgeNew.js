import React from 'react';
import './styles/BadgeNew.css';
import logo from '../images/badge-header.svg'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="Badge__hero">
          <img className="img-fluid" src={logo} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge firstName="Lucas" />
            </div>

            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
