import React, { Component, PropTypes } from 'react';
import { connect, Provider } from 'react-redux'
import Rheostat from 'rheostat';
import { updateParam } from '../actions/index';

@connect()
class ParamSlider extends Component {
  constructor(props) {
    super();

    this.state = {}
  }

  onChange(value) {
    let finalValue = value.values[0] /  Math.pow(10, this.props.precision);
    
    this.props.dispatch(updateParam(this.props.devParam, finalValue))

    if (this.props.onChange) {
      this.props.onChange(finalValue);
    }
  }

  render() {
    let { onChange, min, max, value, precision } = this.props;
    let calculatedPrecision = Math.pow(10, precision);
    
    let preciseMin = min * calculatedPrecision;
    let preciseMax = max * calculatedPrecision;
    let preciseValue = value * calculatedPrecision

    return (
      <Rheostat
        min={preciseMin}
        max={preciseMax}
        values={[value]}
        onValuesUpdated={(value) => this.onChange(value)}
      />
    );
  }
};

//@TODO make these members once I have the required plugin
ParamSlider.propTypes = {
  devParam: PropTypes.string,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  precision: PropTypes.number //The amount of precision in the number returned. Think of this as the number of decimal places
}

ParamSlider.defaultProps = {
  min: 1,
  max: 100,
  precision: 1,
  value: 50
}


export default ParamSlider;