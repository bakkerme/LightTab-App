import './css/index.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import { connect, Provider } from 'react-redux'

import ParamSlider from './components/param-slider';
import './css/slider.css';

import store from './store';
import ParamToSocket from './transport/param-to-socket';
import { updateParamRange } from './actions/';

@connect()
class App extends Component {
  constructor(props) {
    super();

    const socket = new ParamToSocket();
    socket.startListener();
    socket.registerOnMessageCallback(this.handleMessageRecieve);
  }

  handleMessageRecieve = (data) => {
    const message = JSON.parse(data);
    if (message.type === "REQUEST_PARAM_RANGE") {
      this.props.dispatch(updateParamRange(message.payload.param, message.payload.value));
    }
  }

  render() {
    return (
      <div>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
            <h1>Temperature</h1>
            <ParamSlider devParam="Temperature" value={0} className="temperature" />
          </div>
          <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
            <h1>Tint</h1>
            <ParamSlider devParam="Tint" value={0} className="tint" />
          </div>
        </div>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
            <h1>Exposure</h1>
            <ParamSlider devParam="Exposure" precision={2} value={0} />
          </div>
          <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
            <h1>Contrast</h1>
            <ParamSlider devParam="Contrast" value={0} />
          </div>
        </div>
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
