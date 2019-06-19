import React from 'react';
import './radish_yes.css';
import Radish_y from './radish_yes.svg'

class Radish_yes extends React.Component {
  render() {
    return(
      <div id="decision">
        <div class="col-md-6">
          <img src={Radish_y} alt="Good" />
        </div>
        <div class="col-md-6">
          <p>Since the temperature everyday for the next few weeks is between
          10 and 21 degrees Celcius, today is a FANTASTIC day to plant Radishes in {this.props.city}!</p>
        </div>
      </div>
    );
  };
}

export default Radish_yes;
