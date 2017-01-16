import React from 'react';
import CircularProgressbar from 'react-circular-progressbar'
import RepositoryDetails from '../components/RepositoryDetails';
import ServiceConfiguration from '../components/ServiceConfiguration';
import DomainConfiguration from '../components/DomainConfiguration';
import Paper from 'material-ui/Paper';
import './style.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {
  paper: {
    padding: '50px',
    margin: '10px',
    width:700
  }
};

export default class DeployView extends React.Component {
  constructor() {
    super();
    this.deploymentIdAssigned = this.deploymentIdAssigned.bind(this);
    this.state={
      progress: null,
      inc: 0,
    };
  }

  static get contextTypes() {
    return {
      socket: React.PropTypes.object.isRequired
    };
  }

  componentDidMount() {
    // TODO: All socket.on's should appear here.
    // Remember, not to write any functions here.
    this.context.socket.on('services', (services) => {
      this.setState({progress: "Cloned Successfully"});
      this.setState({inc: this.state.inc+20});
     console.log('Received Services'+JSON.stringify(services)) ;
     this.setState({serviceConfiguration: services});
   });

   this.context.socket.on('appCreates', (domain) => {
     console.log('App creation part'+domain);
     this.setState({inc: this.state.inc+20});
     this.setState({progress: "Configured successfully"});
     this.setState({finalServiceConfiguration: domain});
   });
   
    this.context.socket.on('deploymentIdAssigned', this.deploymentIdAssigned);

    this.context.socket.emit('getDeploymentId', {accessToken: 'abc'});
  }

  render() {
    const components = [];
    components.unshift(<RepositoryDetails key="repositoryDetails" onSubmit={this.handleRepositorySelected} />);
    if(this.state.serviceConfiguration) {
      components.unshift(<ServiceConfiguration key="serviceConfiguration" valueOfService={this.state.serviceConfiguration} onSubmit={this.handleServicesConfigured} />);
    }
    if(this.state.finalServiceConfiguration) {
      components.unshift(<DomainConfiguration key="domainConfiguration" onSubmit={this.handleDomainConfigured} />);
    }

    const items = components.map((item, index) => {
    console.log("index:"+components.length);
      return (
        <Card
          key={components.length - index}
          zDepth={2}
          style={style.paper}
           >
          {item}
        </Card>
        
      );
    });

    return (
      <div style={{marginLeft:280}}>

       {items} 
       <div style={{textAlign:'center', width:150,height:150, marginLeft:'60%', position:'fixed', bottom: 75}}>
          <CircularProgressbar percentage={this.state.inc}/>
          <h3>{this.state.progress}</h3>
       </div>
      </div>
    );
  }

  deploymentIdAssigned(msg) {
    console.log('Server assigned a deployment ID:',msg);
  }

  handleRepositorySelected = (selectedRepository,selectBranch) => {
    console.log('Selected Repository:', selectedRepository," ",selectBranch);
    this.setState({progress: "Cloning..."});
    console.log(this.state.progress);
     this.context.socket.emit('clone',{repository:selectedRepository,branch:selectBranch});
  }

  handleServicesConfigured = (value)=> {
    //console.log('Services Configured:', value);
    this.setState({progress: "Configuring Services...."});
    console.log("configuring services....");
    //this.setState({finalServiceConfiguration: serviceConfiguration});
    this.context.socket.emit('convert',{valueOfService: value});
  }

  handleDomainConfigured(domainConfiguration) {
    console.log('Domain Configured:', domainConfiguration);
  }
}