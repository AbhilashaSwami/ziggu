import React from 'react';
import Header from './AppBar'

export default class ContextComponent extends React.Component {
  constructor() {
    super();
    const config = require('../config');
    // eslint-disable-next-line
    const socket = io(config.serverUrl);
    this.state = {
      socket: socket,
      serverUrl: config.serverUrl
    }
  }

  static get childContextTypes() {
    return {
      socket: React.PropTypes.object,
      serverUrl: React.PropTypes.string
    };
  }

  static get propTypes() {
    return {
      children: React.PropTypes.object.isRequired
    }
  }

  getChildContext() {
    return {
      socket: this.state.socket,
      serverUrl: this.state.serverUrl
    }
  }

  render() {
    return (
      <div>
      <Header />
        <div>
          {/*<small>This is the Context Component</small>*/}
          { this.props.children }
         </div> 
      </div>
    );
  }
}
