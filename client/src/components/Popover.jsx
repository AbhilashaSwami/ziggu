import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text1: '', text2: ''};
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
        <span>Key:</span>
          <input onChange={this.handleChange1} value={this.state.text1} />
       <span style={{marginLeft:30}}> Value:</span>
          <input onChange={this.handleChange2} value={this.state.text2} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }

  handleChange1(e) {
    this.setState({text1: e.target.value});

    
  }
  handleChange2(e) {
   
    this.setState({text2: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text1: this.state.text1,
      text2: this.state.text2,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text1: '',
      text2: '',
    }));

  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ol>
        {this.props.items.map(item => (
          <li key= {item.id} > {item.text1}  :  {item.text2}</li>
        ))}
      </ol>
    );
  }
}

export default Todo;