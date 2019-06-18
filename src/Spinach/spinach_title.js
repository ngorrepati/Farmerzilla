import React from 'react';
import './spinach_title.css'

class Title extends React.Component {
  render() {
    return(
      <div class="container-fluid spinach_title">
        <div class="row title">
          <br/>
          <br/>
          <h1>Should I Plant Spinach?</h1>
          <br/>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="icon" id="pepper">
              <img src="https://www.flaticon.com/premium-icon/icons/svg/1790/1790449.svg" alt="Harvest"/>
              <p>Displays whether or not today is a good day to plant Spinach depending on
                your location and the weather</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="icon" id="flower">
              <img src="https://image.flaticon.com/icons/svg/403/403627.svg" alt="Plant"/>
              <p>The ideal conditions for cultivating spinach include a temperature between 5 degrees Celcius and
              25 degrees Celcius for the next few weeks.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Title;
