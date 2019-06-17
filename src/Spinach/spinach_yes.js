import React from 'react';
import './spinach_yes.css';

class Spinach_yes extends React.Component {
  render() {
    return(
      <div id="decision">
        <div class="col-md-6">
          <img src="https://image.flaticon.com/icons/svg/1484/1484966.svg" alt="Good" />
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
