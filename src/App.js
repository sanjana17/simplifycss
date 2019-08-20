import React from 'react';
import './App.css';
import ButtonComponent from "./ButtonComponent/ButtonComponent";
import CSSComponent from "./CSSComponent/CSSComponent";
import ClassNameComponent from "./ClassNameComponent/ClassNameComponent";

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {class: '', classValue:'', classArray:[], classObj:{}};

      this.handleClassChange = this.handleClassChange.bind(this);
      this.handleClassValueChange = this.handleClassValueChange.bind(this);
      this.handleAddfunction = this.handleAddfunction.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleClassChange(event) {
        this.setState({...this.state,class: event.target.value});
    }

    handleClassValueChange(event) {
        this.setState({...this.state,classValue: event.target.value});
    }

    handleAddfunction(event){
        let obj = {};
        obj["className"] = this.state.class;
        obj["classValue"] = this.state.classValue;
        let objects=this.state.classArray;
        objects.push(obj);

        var allTags = document.body.getElementsByTagName('*');
        var classNames = {};
        for (var tg = 0; tg< allTags.length; tg++) {
            var tag = allTags[tg];
            if (tag.className) {
                var classes = tag.className.split(" ");
                for (var cn = 0; cn < classes.length; cn++){
                    var cName = classes[cn];
                    if (! classNames[cName]) {
                        classNames[cName] = true;
                    }
                }
            }
        }
        var classList = [];
        for (var name in classNames) classList.push(name);
        alert(classList);
        this.setState({class:"", classValue: "", classArray: objects, classObj:{}})
    }

    handleSubmit(event) {
        event.preventDefault();
        let item = this.state.classArray;
        const container = {};

        for(var i=0;i<item.length;i++){
            container[item[i].className] = item[i].classValue;
        }

        console.log(container);
        this.setState({...this.state, classObj: container});

    }

  render() {
      return (
          <div className="App">
            <ClassNameComponent className={this.state.class} classValue = {this.state.classValue} changeClass={this.handleClassChange} changeClassValue={this.handleClassValueChange} changeAdd={this.handleAddfunction} submit={this.handleSubmit}/>
            <ButtonComponent styleValue={this.state.classObj}/>
              {JSON.stringify(this.state.classObj)}
            <CSSComponent/>
          </div>
      );
  }
}

export default App;
