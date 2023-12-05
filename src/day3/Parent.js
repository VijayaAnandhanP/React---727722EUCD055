import React, { Component } from 'react';
import Child from './Child';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  handleMessageFromChild = (message) => {
    this.setState({ message });
  }

  render() {
    return (
      <div>
        <Child
          messageFromParent="Hello from Parent!" 
          sendMessageToParent={this.handleMessageFromChild} 
        />
        <p>Message from child: {this.state.message}</p>
      </div>
    );
  }
}

export default ParentComponent;