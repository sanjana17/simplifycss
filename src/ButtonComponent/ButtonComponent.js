import React, { Component } from 'react';

export default class ButtonComponent extends Component {
  render() {
    return (
      <div className="buttoncomponent col-sm-5">
      	<h2> Component </h2>
        <button style={this.props.styleValue}>hi</button>
      </div>
    )
  }
}
