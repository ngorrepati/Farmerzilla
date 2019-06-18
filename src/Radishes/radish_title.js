import React from 'react';
import './radish_title.css'

class Radish_title extends React.Component {
  render() {
    return(
      <div class="container-fluid radish_title">
        <div class="row title">
          <br/>
          <br/>
          <h1>Should I Plant Radishes?</h1>
          <br/>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="icon" id="pepper">
              <img src="https://image.flaticon.com/icons/svg/267/267889.svg" alt="Harvest"/>
              <p>Displays whether or not today is a good day to plant Radishes depending on
                your location and the weather</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="icon" id="flower">
              <img src="https://image.flaticon.com/icons/svg/186/186130.svg" alt="Plant"/>
              <p>The ideal conditions for cultivating Radishes include a temperature between 10 degrees Celcius and
              21 degrees Celcius for the next few weeks.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Radish_title;
