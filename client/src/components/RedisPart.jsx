import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Checkbox from 'material-ui/Checkbox';

class RedisPart extends Component {
   
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
       this.props.checkOption(!this.state.checked);
   };
   handleChange(e){
const redis_url =e.target.value;
this.props.changeUrl(redis_url);
   }
   


 render() {
   let show = '';
   
      if(this.state.showQuery == 1 && this.state.checked==true){
           show = <TextField disabled={false} hintText="Redis_url" value={this.props.value} onChange={this.handleChange.bind(this)}/>;
         console.log(show);
       }
   const {finished, stepIndex} = this.state;
   const contentStyle = {margin: '0 16px'};
       
   return (
     <div>
   
           <Checkbox
   name="StylesOverridingInlineExample"
   label="Redis"
   value="checked"
   checked={this.state.checked}

   onCheck={this.addQuery}
   style={{
     width: '50%',
     
   }}
 />      
       
       {show}
           
     </div>
   );
 }
}
export default RedisPart;