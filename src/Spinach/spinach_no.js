import React from 'react';
import './spinach_no.css';
import Spinach_n from './spinach_no.svg'

class Spinach_no extends React.Component {
  render() {
    return(
      <div id="decision">
        <div class="col-md-6">
          <img src={Spinach_n} alt="Bad" />
        </div>
        <div class="col-md-6">
          <p>Since the temperature is NOT between 5 and 25 degrees Celcius everyday for the next few weeks,
          today is a POOR day to plant Spinach in {this.props.city}!</p>
        </div>
      </div>
    );
  };
}

export default Spinach_no;
