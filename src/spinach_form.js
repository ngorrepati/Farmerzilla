import React from 'react';

class Form extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.getClimateData}>
        <input type="text" name="City" placeholder="City or City, State"/>
        <input type="text" name="Country" placeholder="Country (optional)"/>
        <button>Can I Plant Spinach Today?</button>
      </form>
    );
  };
}

export default Form;
