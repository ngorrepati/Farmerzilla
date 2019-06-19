import React from 'react';
import './radish_title.css';
import Radish1 from './radish1.svg';
import Radish2 from './radish2.svg';

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
              <img src={Radish1} alt="Harvest"/>
              <p>Displays whether or not today is a good day to plant Radishes depending on
                your location and the weather</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="icon" id="flower">
              <img src={Radish2} alt="Plant"/>
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
