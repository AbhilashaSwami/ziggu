import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Popover from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import RedisPart from './RedisPart';
import MongoPart from './MongoPart';
import Todo from './Popover';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Autoscaling from './AutoScaling';
import Dialog from 'material-ui/Dialog'

const style = {style1:{
 height: 350,
 width: 500,
 marginTop: 30,
 marginLeft:400,
 align: 'center',
 display: 'inline-block',

},
style2:{
  position:"fixed",
  bottom:50,
  right:150,
},
style3:{
 marginLeft:20,
 marginTop:10
}, 
domain: {
  fontWeight: 'bold',
}
};

export default class ServiceConfiguration extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      redis_url :"redis://:secrets@example.com:1234/9?foo=bar&baz=qux",
      redis_check: false,
      value: 1,
       open: false,
       mongo_url : "mongo_url://:secrets@example.com:1234/9?foo=bar&baz=qux",
       mongo_check: false
    }
  }
  changeRedisUrl(redis_url){
    this.setState({redis_url});

  }
  redisCheck(redis_check, a){
    this.setState({redis_check});
    if(!(this.state.redis_check==true)){
  console.log("yesgoing inside");
  console.log(JSON.stringify(redis_check));
  console.log(a);
 
  this.formatting(this.props.valueOfService, a, "redis_url" , this.state.redis_url)}
else{this.removing(this.props.valueOfService, a, "redis_url" )}};
  
  changeMongoUrl(mongo_url){
    this.setState({mongo_url});
     
  }
  mongoCheck(mongo_check){
    this.setState({mongo_check});
     if(!(this.state.mongo_check==true)){
  console.log("yesgoing inside mongo");
  this.formatting(this.props.valueOfService, "tasker", "mongo_url" , this.state.mongo_url)}
  else{
     this.removing(this.props.valueOfService, "tasker", "mongo_url" )  
  }
  }
  static get propTypes() {
    return {
      valueOfService: React.PropTypes.object.isRequired,
      onSubmit: React.PropTypes.func.isRequired
    }
  }

 handleNext = () => {
  const {stepIndex} = this.state;
  this.setState({
    stepIndex: stepIndex + 1,
    finished: stepIndex >= 2,
  });
};
handlePrev = () => {
  const {stepIndex} = this.state;
  if (stepIndex > 0) {
    this.setState({stepIndex: stepIndex - 1});
  }
};
handleTouchTap = () => {
    // This prevents ghost click.

    event.preventDefault();
    console.log();
    this.setState({
      open: true,
  //    anchorEl:,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
   handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
 


 

  handleChange = (event, index, value) => this.setState({value});

  componentDidMount() {
    this.setState({valueService: this.props.valueOfService})
   // console.log(this.state.valueService.service);
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
     
    ];

    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
    var b = this.ArrayOfServices(this.props.valueOfService);
    for(var i in b){
      console.log("finallyyy"+b[i]);
    }
    console.log(this.state.redis_check);
    console.log(this.state.mongo_check);
    var b1=this.state.redis_check;

   



  let services1= b.map((serviceName, i)=> {
     console.log(i);
     return(
         
            <GridTile style={{paddingTop:20}}>
              <RaisedButton style={{width:300}}
                onTouchTap={this.handleTouchTap}
                label={serviceName}
              />
              <Dialog
                actions={actions}
                modal={true}
                open={this.state.open}
                style={{width:800, marginLeft:350}}
                key={i}
              >
            <h1> {serviceName} </h1>
             <div>
               <form onSubmit={this.handleSubmit} >
                <Menu >
                  <MenuItem>
                        <RedisPart check={this.state.redis_check} checkOption={this.redisCheck.bind(this, {serviceName})} changeUrl={this.changeRedisUrl.bind(this)} value={this.state.redis_url}/>
                         
                  </MenuItem>
                  <MenuItem>
                       <MongoPart check={this.state.redis_check} checkOption={this.mongoCheck.bind(this, {serviceName})} changeUrl={this.changeMongoUrl.bind(this)}  value={this.state.mongo_url}/>
                     
                                 </MenuItem>
                  <MenuItem>
                       <Todo />
                  </MenuItem>
                  <MenuItem style={{fontWeight:'bold'}} primaryText="Queue-->" />
                  <MenuItem>
                
             
                   <RadioButtonGroup name ="Queue-->" style={{marginLeft:5}}>
                      <RadioButton
                        value="Worker Queue"
                        label="Worker Queue"

                      />
                      <RadioButton
                        value="Pub/sub"
                        label="Pub/sub"
                      />
                   </RadioButtonGroup>
               
                  </MenuItem>
                 <MenuItem>
                 <div style={{marginTop:15}}>
                    <Autoscaling />
                  </div>
                </MenuItem>
                </Menu>
                </form>
                </div>
              </Dialog>
            </GridTile>
         
   
      );
   }
   );
    return(
      <div>
          <div>
        <form  onSubmit={ this.handleServicesConfigured.bind(this,this.state.valueService)}>
      <div >

      <div style={{marginTop:0}}>
      <h2 style={{textAlign:"center"}}>Configure Microservices</h2>
      <div style={{}}>
      <GridList
            cellHeight={62} 
          >
    
      {services1}
     
 <br/>
      </GridList>
     
     
      </div>

      </div>
      <RaisedButton label="Next" primary={true} style={{margin:12}} type= 'submit' />

      </div>
      </form>
      </div>
  </div>
  );

  }
  
  handleServicesConfigured(valueService)
  { 
    console.log(valueService);
    this.props.onSubmit(valueService);
  }

ArrayOfServices(valueService){
    var a= [];
    var j=0;
  for(var i in valueService.services){
     a[j] =i
    console.log("service page"+a[j]);
    j++;
  }
  return a;
  }
  formatting(mainfile, service, key, val){
        var a=mainfile.services;
  for(var i in a ){
    console.log("fetch"+i);
    console.log("a[i]"+a[i]);
    console.log("serviceyeah"+service);
    if(i==service){
  var   obj=a[i]
   console.log("askjuhdxwdvweycgwebehccuew");
    obj[key] =val;
  
    //console.log(obj);
  }

      // return obj;
  }
}
removing(mainfile, service, key){
        var a=mainfile.services;
  for(var i in a ){
  var   obj=a[i]
   
    delete obj[key];
  
    //console.log(obj);

       return obj;
  }
}
}
 