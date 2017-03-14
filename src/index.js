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

  render() {
    return (
      <div>
        <ParamSlider devParam="Exposure" min={-5} max={5} precision={2} value={0} />
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
