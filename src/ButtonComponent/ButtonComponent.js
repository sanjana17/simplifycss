import React, { Component } from 'react';

export default class ButtonComponent extends Component {
  render() {
    return (
      <div className="buttoncomponent">
        <button style={this.props.styleValue}>hi</button>
      </div>
    )
  }
}
