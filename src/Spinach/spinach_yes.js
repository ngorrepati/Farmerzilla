import React from 'react';
import './spinach_yes.css';
import Spinach_y from './spinach_yes.svg'

class Spinach_yes extends React.Component {
  render() {
    return(
      <div id="decision">
        <div class="col-md-6">
          <img src={Spinach_y} alt="Good" />
        </div>
        <div class="col-md-6">
          <p>Since the temperature everyday for the next few weeks is between
          5 and 25 degrees Celcius, today is a FANTASTIC day to plant Spinach in {this.props.city}!</p>
        </div>
      </div>
    );
  };
}

export default Spinach_yes;
