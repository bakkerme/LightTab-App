import React, { Component, PropTypes } from 'react';
import { connect, Provider } from 'react-redux'
import Rheostat from 'rheostat';

@connect()
class ParamSlider extends Component {
  const propTypes = {
    onChange: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number
  }

  const defaultProps = {
    min: 1,
    max: 100,
    value: 50
  }
  
  constructor(props) {
    super();

    this.state = {}
  }

  render() {
    let { onChange, min, max, value } = this.props;
    
    return (
      <Rheostat
        min={min}
        max={max}
        values={[value]}
        onValuesUpdated={onChange}
      />
    );
  }
};