import React, { Component } from 'react';

export default class ClassNameComponent extends Component {
  render() {
    return (
      <div className="classnamecomponent">
        <form onSubmit={this.props.submit}>
          <label>
            ClassName:
            <input type="text" value={this.props.className} onChange={this.props.changeClass}/>
          </label>
          <label>
            Value:
            <input type="text" value={this.props.classValue} onChange={this.props.changeClassValue}/>
          </label>
          <br />
          <br />
          <input type="button" value="add" onClick={this.props.changeAdd}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
