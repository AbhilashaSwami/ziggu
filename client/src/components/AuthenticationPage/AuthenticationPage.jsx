import React, { Component } from 'react';
import logo from './ziggurate.jpg';
import RaisedButton from 'material-ui/RaisedButton';

import $ from 'jquery';

class AuthenticationPage extends Component {

  state={
    githubUrl: ''
  };

  componentDidMount () {
   $.ajax({
     url: '/api/v1/auth/github/login',
     type: 'GET',
     datatype: 'JSON',
     success: function(data) {
       this.setState({githubUrl: data});
     }.bind(this)

   });
 }

render() {
    return(
      <div className='row center-xs'>
      <div className='col-xs-12 col-mg-12 col-lg-12'>
      <p style={{fontSize: 40, marginLeft:550}}> Ziggurate</p>
      <img src={logo}  style={{width: 400, height: 340, marginLeft: 440}} alt="logo" />
     
      <div className='row center-xs'>
      <a href={this.state.githubUrl}>
     
      <RaisedButton
      label style= {{ marginLeft: 550}}
     
      label="Login with GitHub" type="submit" primary={true} />
      </a>
   
      </div>
      </div>
      </div>
      );
  }
}

export default AuthenticationPage;
