import React from 'react';
import './spinach_form.css'

class Form extends React.Component {
  render() {
    return(
      <div class="container-fluid text-center form">
        <form onSubmit={this.props.getClimateData}>
          <input class="enter" type="text" name="City" placeholder="City or City, State"/>
          <br/>
          <input class="enter" type="text" name="Country" placeholder="Country (optional)"/>
          <br/>
          <button class="click">Can I Plant Spinach Today? »</button>
        </form>
      </div>
    );
  };
}

export default Form;
