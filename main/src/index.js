import React from 'react';
import ReactDOM from 'react-dom';
import SubApps from './containers/SubApps';

const App = () => (
  <div>
    <div>Hi from main app!</div>
    <SubApps />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
