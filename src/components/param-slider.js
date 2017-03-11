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
    this.props.dispatch(updateParam(this.props.devParam, value.values[0]))

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    let { onChange, min, max, value } = this.props;

    return (
      <Rheostat
        min={min}
        max={max}
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
  value: PropTypes.number
}

ParamSlider.defaultProps = {
  min: 1,
  max: 100,
  value: 50
}


export default ParamSlider;