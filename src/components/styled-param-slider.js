import ParamSlider from './param-slider';
import React, { Component, PropTypes } from 'react';

export default class StyledParamSlider extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.devParam}</h1>
        <ParamSlider {...this.props} />
        <style jsx>{`
          div {
            flex: 1;
            display: flex;
            position: relative;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
          }
          h1 {
            position: absolute;
            z-index: 10;
            font-size: 15px;
            left: 21px;
            top: 24px;
            color: white;
            font-weight: 500;
          }
        `}</style>
      </div>
    );
  }
}