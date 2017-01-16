import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Checkbox from 'material-ui/Checkbox';
 
class Autoscaling extends Component {
    
     constructor(props) {
       super(props);
       this.state ={
           showQuery: 0,
           addVal: '',
           checked:false
       }
       
       this.addQuery = this.addQuery.bind(this);
   }
    state = {
    
     open: false,
  };
  

  addQuery() {
        this.setState({showQuery: 1,
          checked: !this.state.checked});
    };
    
 
 
  render() {
    let show1 = '';
     let show2 = '';
        
       if(this.state.showQuery == 1 && this.state.checked==true){
            show1 =    <TextField
      hintText="3"
      errorText="This field is required"
      floatingLabelText="Min_value "
      style={{width:40}}
      
    />;
    show2=  <TextField
      style={{width:40,marginLeft: 100}}
      hintText="100"
      errorText="This field is required"
      floatingLabelText="Max_value"
    />;
  }
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
        
    return (
      <div>
         
            <Checkbox
    name="StylesOverridingInlineExample"
    label="Autoscaling"
    value1="checked"
    checked={this.state.checked}
    onCheck={this.addQuery}
    style={{
      
      
    }}
  />       
        
        {show1}
        {show2}
            
      </div>
    );
  }
}
export default Autoscaling;