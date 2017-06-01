import './css/index.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import { connect, Provider } from 'react-redux'

import ParamSlider from './components/styled-param-slider';
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
          <ParamSlider devParam="Temperature" value={0} className="temperature" />
          <ParamSlider devParam="Tint" value={0} className="tint" />
        </div>
        <hr />
        <h2>Tone</h2>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <ParamSlider devParam="Exposure" precision={2} value={0} />
          <ParamSlider devParam="Contrast" value={0} />
        </div>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <ParamSlider devParam="Highlights" value={0} />
          <ParamSlider devParam="Shadows" value={0} />
        </div>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <ParamSlider devParam="Whites" value={0} />
          <ParamSlider devParam="Blacks" value={0} />
        </div>
        <hr />
        <h2>Presence</h2>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <ParamSlider devParam="Clarity" value={0} />
        </div>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <ParamSlider devParam="Vibrance" value={0} />
          <ParamSlider devParam="Saturation" value={0} />
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
