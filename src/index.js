import './css/index.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import { connect, Provider } from 'react-redux'

import ParamSlider from './components/param-slider';
import './css/slider.css';

import store from './store';
import ParamToSocket from './transport/param-to-socket';

@connect()
class App extends Component {
  constructor(props) {
    super();

    const socket = new ParamToSocket();
    this.state = {}
  }
  
        // <h1>Temperature</h1>
        // <ParamSlider devParam="Temperature" min={-100} max={100} value={0} className="temperature" />

  render() {
    return (
      <div>
        <h1>Tint</h1>
        <ParamSlider devParam="Tint" min={-100} max={100} value={0}  className="tint" />
        <h1>Exposure</h1>
        <ParamSlider devParam="Exposure" min={-5} max={5} precision={2} value={0} />
        <h1>Contract</h1>
        <ParamSlider devParam="Contrast" min={-100} max={100} value={0} />
      </div>
    );
  }
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
);
