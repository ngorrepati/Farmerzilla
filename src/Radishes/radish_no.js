import React from 'react';
import './radish_no.css';

class Radish_no extends React.Component {
  render() {
    return(
      <div id="decision">
        <div class="col-md-6">
          <img src="https://image.flaticon.com/icons/svg/1159/1159417.svg" alt="Bad" />
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
