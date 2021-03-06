import ParamSlider from './param-slider';
import React, { Component, PropTypes } from 'react';
import overrideStyles from './rheostat-overide-styles';

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
            border-radius: 10px;
            overflow: hidden;
          }
          h1 {
            position: absolute;
            z-index: 10;
            font-size: 15px;
            left: 21px;
            top: 27px;
            color: white;
            font-weight: 500;
            margin: 0;

          }
        `}</style>
        <style jsx global>{overrideStyles}</style>
      </div>
    );
  }
}