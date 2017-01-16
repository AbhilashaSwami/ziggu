import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import CircularProgressbar from 'react-circular-progressbar';



export default class RepositoryDetails extends React.Component {
  static get propTypes() {
    return {
      onSubmit: React.PropTypes.func.isRequired
    }
  }
constructor() {
  super();
   this.state = {
    repository:[],
    branches:[]
 
  };
}

 
componentDidMount() {
  this.setState({repository:['akanksha152/tasker', 'ebin011/chatProject']}),
  this.setState({branches:['docker-integration','dev']})
}
 
  handleChangeRepo = (event, index, value) => this.setState({selectedRepository:value,selectedBranch:null});
  handleChangeBranch=(event, index, value) => this.setState({selectedBranch:value})
  
  render() {
      
      const repoName=this.state.repository.map((repo) => {

        return (
          <MenuItem key={repo} value={repo} primaryText={repo}/>
          );

      });

      const branchName=this.state.branches.map((branch) => {

        return (
          <MenuItem key={branch} value={branch} primaryText={branch}/>
          );

      });

    return (
      <div>
      <form onSubmit={ this.handleRepositorySelected.bind(this, this.state.selectedRepository,this.state.selectedBranch) }>
      <div style={{marginTop:20}}>
      <h2 style={{textAlign:"center"}}>Choose Repository and Branch</h2>
      <div style={{}}>
      
       <SelectField
          floatingLabelText="Select Repositary"
          value={this.state.selectedRepository}
           onChange={this.handleChangeRepo}
          >
        {repoName}
        </SelectField>
       <br/>
       <SelectField
          floatingLabelText="Select Branch"
          value={this.state.selectedBranch}
          disabled={!this.state.selectedRepository}
           onChange={this.handleChangeBranch}
            >
         {branchName}
          
        </SelectField>
       <br/>
     </div>
       
       </div>
        <RaisedButton label="Next" primary={true}   
        disabled={!this.state.selectedBranch} 
        type= 'submit'
                />

     
        
    </form>

   </div> 
    );
  }
  handleRepositorySelected(repo,branch)
  {
    this.props.onSubmit(repo,branch);
  }
}
