import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({ counter: prevState.counter + 1 }));
    }, 1000);
  }

  render() {
    const { counter } = this.state;
    return <div>Howdy from sub app one! {counter}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('subroot-1'));
