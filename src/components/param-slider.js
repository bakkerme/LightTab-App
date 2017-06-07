import React, { Component, PropTypes } from 'react';
import { connect, Provider } from 'react-redux'
import Rheostat from 'rheostat';
import { updateParam, requestParamRange } from '../actions/index';

export class ParamSlider extends Component {
  static propTypes = {
    devParam: PropTypes.string,
    onChange: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    precision: PropTypes.number //The amount of precision in the number returned. Think of this as the number of decimal places
  }

  static defaultProps = {
    min: 1,
    max: 100,
    precision: 0,
    value: 50
  }

  onChange = (value) => {
    const finalValue = value.values[0] / Math.pow(10, this.props.precision);
    if (this.props.onChange) {
      this.props.onChange(finalValue);
    }
  }

  render() {
    const { onChange, min, max, value, precision, ...other } = this.props;
    const calculatedPrecision = Math.pow(10, precision);

    const preciseMin = min * calculatedPrecision;
    const preciseMax = max * calculatedPrecision;
    const preciseValue = value * calculatedPrecision

    return (
      <div style={{ flex: 1, padding: 10 }}>
        <Rheostat
          min={preciseMin}
          max={preciseMax}
          values={[value]}
          onValuesUpdated={this.onChange}
          {...other}
        />
        <div className="crementors">
          <div className="minus" onClick={() => this.onChange({ values: [value - 1] })}>-</div>
          <div className="plus" onClick={() => this.onChange({ values: [value + 1] })}>+</div>
        </div>
        <style jsx global>{`
          .rheostat {
            overflow: visible;
            margin-top: 13px;
            flex: 1;
          }  
        `}</style>

        <style jsx>{`
          .crementors {
            display: flex;
            flex: 1;
            flex-direction: row;
            height: 56px;
          }

          .crementors .plus, .crementors .minus {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            font-weight: bold;
            cursor: pointer;
          }

          .crementors .minus {
            border: 2px solid #FF0000;
            border-radius: 0 0 0 20px;
            color: #FF0000;
            padding-bottom: 8px;
          }

          .crementors .plus {
            border: 2px solid #00FF6F;
            border-radius: 0 0 20px 0;
            color: #00FF6F;
          }
        `}</style>
      </div>
    );
  }
};


@connect(
  (state, ownProps) => {
    if (state.devParams[ownProps.devParam] && state.devParams[ownProps.devParam].range) {
      const currState = state.devParams[ownProps.devParam];
      const range = currState.range;
      const value = currState.value ? currState.value : range.value;

      return {
        min: range.min,
        max: range.max,
        value: value
      };
    }
    return {};
  }
)
export default class ConnectedParamSlider extends Component {
  static propTypes = {
    ...ParamSlider.propTypes
  }

  constructor(props) {
    super();

    this.state = {
      value: 0
    }
  }


  componentWillMount() {
    this.props.dispatch(requestParamRange(this.props.devParam));
  }

  onChange = (value) => {
    this.props.dispatch(updateParam(this.props.devParam, value))

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    let { onChange, ...props } = this.props

    return (<ParamSlider onChange={this.onChange} {...props} />);
  }
}