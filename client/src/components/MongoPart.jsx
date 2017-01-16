import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem'
class MongoPart extends Component {
   
    constructor(props) {
      super(props);
      this.state ={
          showQuery: 0,
          addVal: '',
          checked:false,
          value: 1
      }
     
      this.addQuery = this.addQuery.bind(this);
  }
   state = {
   
    open: false,
 };

 

 handleChange = (event, index, value) => this.setState({value});
 

 addQuery() {
       this.setState({showQuery: 1,
         checked: !this.state.checked});
       this.props.checkOption(!this.state.checked);
   };
    handleChange1(e){
const mongo_url =e.target.value;
this.props.changeUrl(mongo_url);
   }


 render() {
   let show1 = '';
    let show2 = '';
       
      if(this.state.showQuery == 1 && this.state.checked==true){
           show1 =    <SelectField
         floatingLabelText="Select Repositary"
         value={this.state.value}
         onChange={this.handleChange}
       >
         <MenuItem value={1} primaryText="Mongo_db" />
         <MenuItem value={2} primaryText="Mongo_d" />
     
       </SelectField>;
   show2=  <TextField disabled={false} hintText="Mongo_db_url" onChange={this.handleChange1.bind(this)} value={this.props.value}  />;
 }
   const {finished, stepIndex} = this.state;
   const contentStyle = {margin: '0 16px'};
       
   return (
     <div>
       
           <Checkbox
   name="StylesOverridingInlineExample"
   label="MongoDB"
   value="checked"
   checked={this.state.checked}
   onCheck={this.addQuery}
   style={{
     width: '50%',
     
   }}
 />      
       
       {show1}
       <br/>
       {show2}
           
     </div>
   );
 }
}
export default MongoPart;