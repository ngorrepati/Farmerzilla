import React from 'react';
import './radish_form.css'

class Radish_form extends React.Component {
  render() {
    return(
      <div class="container-fluid text-center form">
        <form onSubmit={this.props.getClimateData}>
          <input class="enter" type="text" name="City" placeholder="City or City, State"/>
          <br/>
          <input class="enter" type="text" name="Country" placeholder="Country (optional)"/>
          <br/>
          <button class="r_click">Can I Plant Radishes Today? »</button>
        </form>
      </div>
    );
  };
}

export default Radish_form;
