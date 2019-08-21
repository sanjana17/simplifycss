import React, { Component } from 'react';

export default class ClassNameComponent extends Component {
  render() {
    return (
      <div className="classnamecomponent jumbotron">
        <div className="row">
          <div className="input-group col-sm-4 offset-sm-2">  
            <input type="text" value={this.props.className} onChange={this.props.changeClass} className="form-control" placeholder="className"/>
          </div>
          <div className="input-group col-sm-4">  
            <input type="text" value={this.props.classValue} onChange={this.props.changeClassValue} className="form-control" placeholder="value"/>
          </div>
        </div>    
        <br />
        <div className="row offset-sm-5">
          <button type="button" className="btn btn-primary" onClick={this.props.changeAdd}>add</button>
          <button type="button" className="btn btn-success" onClick={this.props.submit}>submit</button>
        </div>
      </div>
    )
  }
}
