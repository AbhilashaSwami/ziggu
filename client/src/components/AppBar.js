import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import {IndexLink} from 'react-router';
import {List, ListItem} from 'material-ui/List';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import Logout from 'material-ui/svg-icons/action/highlight-off';
import Server from 'material-ui/svg-icons/device/storage';
import DeployIcon from 'material-ui/svg-icons/file/file-upload';
import DeployedAppIcon from 'material-ui/svg-icons/action/view-module';
import Divider from 'material-ui/Divider';


class Header extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return(

      <div>
        <AppBar
        title="Ziggurate"
        onLeftIconButtonTouchTap={() => { this.setState({open: true}); }}/>

        <Drawer open={this.state.drawerOpen}
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})} >
          <div >
            <div style={{marginTop:'50px',textAlign: 'center'}}>
              <Avatar  size={150} />
              <h5>Git Profile Name</h5>
            </div>
            <Divider/>
              <List >
                <ListItem primaryText="Dashboard" leftIcon={<DashboardIcon />} onTouchTap={this.handleClose}  />
                <ListItem primaryText="Server" leftIcon={<Server />} onTouchTap={this.handleClose} />
                <IndexLink to="/app/deploy" activeClassName="active" style={{textDecoration:'none'}}> <ListItem primaryText="Deploy" leftIcon={<DeployIcon />} onTouchTap={this.handleClose} /></IndexLink>
                <ListItem primaryText="Deployed App" leftIcon={<DeployedAppIcon />} onTouchTap={this.handleClose} />
                <ListItem primaryText="Logout" leftIcon={<Logout />} onTouchTap={this.handleClose} />
              </List>        
          </div>
        </Drawer>
      </div>

      );

      }

}

export default Header;
