import React from 'react';

class Title extends React.Component {
  render() {
    return(
      <div>
        <h1>When to Plant Rice>?</h1>
        <p>Displays whether or not the next 7 days are good days to plant rice depending on
          your location</p>
        <p>The ideal conditions for cultivating rice are a cumulative seasonal rainfall of 100cm to 300cm
        and a temperature between 20 degrees Celcius and
        40 degrees Celcius for the next 120 days.</p>
      </div>
    );
  };
}

export default Title;
