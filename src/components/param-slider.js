import React, { Component, PropTypes } from 'react';
import { connect, Provider } from 'react-redux'
import Rheostat from 'rheostat';
import { updateParam } from '../actions/index';


class ParamSlider extends Component {
  constructor(props) {
    super();

    this.state = {}
  }

  onChange = (value) => {
    let finalValue = value.values[0] /  Math.pow(10, this.props.precision);
    if (this.props.onChange) {
      this.props.onChange(finalValue);
    }
  }

  render() {
    let { onChange, min, max, value, precision, ...other } = this.props;
    let calculatedPrecision = Math.pow(10, precision);
    
    let preciseMin = min * calculatedPrecision;
    let preciseMax = max * calculatedPrecision;
    let preciseValue = value * calculatedPrecision

    return (
      <Rheostat
        min={preciseMin}
        max={preciseMax}
        values={[value]}
        onValuesUpdated={this.onChange}
        {...other}
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
  precision: 0,
  value: 50
}


@connect(
  (state) => {
    console.log(state);
    return {};
  }
)
class ConnectedParamSlider extends Component {
  static propTypes = {
    ...ParamSlider.propTypes
  }
  
  onChange = (value) => {
    this.props.dispatch(updateParam(this.props.devParam, value))

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    let {onChange, ...props} = this.props
    
    return(<ParamSlider onChange={this.onChange} {...props} />);
  }
}

export default ConnectedParamSlider;
export ParamSlider;