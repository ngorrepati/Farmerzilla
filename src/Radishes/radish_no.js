import React from 'react';
import './radish_no.css';
import Radish_n from './radish_no.svg'

class Radish_no extends React.Component {
  render() {
    return(
      <div id="decision">
        <div class="col-md-6">
          <img src={Radish_n} alt="Bad" />
        </div>
        <div class="col-md-6">
          <p>Since the temperature is NOT between 10 and 21 degrees Celcius everyday for the next few weeks,
          today is a POOR day to plant Radishes in {this.props.city}!</p>
        </div>
      </div>
    );
  };
}

export default Radish_no;
