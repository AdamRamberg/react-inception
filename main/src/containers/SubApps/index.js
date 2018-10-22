import React, { Component } from 'react';

class SubApps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    // fetch('http://localhost:5000/sub-app-one/main.js').then(resp => {
    //   console.log(resp.body);
    // });
    const scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      document.head.appendChild(script);
      script.onload = resolve;
      script.onerror = reject;
      script.async = true;
      script.src = 'http://localhost:5000/sub-app-one/main.js';
    });

    scriptPromise.then(() => {});
  }

  s;

  render() {
    // const { loading } = this.state;
    // if (loading) {
    //   return <div>loading...</div>;
    // }

    return <div id="subroot-1" />;
  }
}

export default SubApps;
