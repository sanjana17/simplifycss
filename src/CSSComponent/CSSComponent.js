import React, { Component } from 'react';

export default class CSSComponent extends Component {
  render() {
    return (
      <div className="csscomponent col-sm-5">
      	<h2>CSS </h2>
        {JSON.stringify(this.props.classValues)}
      </div>
    )
  }
}
