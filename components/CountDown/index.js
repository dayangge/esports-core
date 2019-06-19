import React, { Component } from 'react';
import PropTypes from 'prop-types';

function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

export default class CountDown extends Component {
  timer = 0;

  interval = 1000;
  state={
    lastTime:60
  };

  componentDidMount() {
    const { time } = this.props;
    this.setState({
      lastTime:time
    },() => {
      this.tick();
    });

  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  tick = () => {
    const { onEnd, time } = this.props;
    let { lastTime } = this.state;
    this.timer = setTimeout(() => {
      if (lastTime === 0) {
        this.setState({
            lastTime: time,
          }, () => {
            this.tick();
            if (onEnd) {
              onEnd();
            }
          }
        );
      } else {
        lastTime = lastTime -1;
        this.setState({
            lastTime,
          }, () => {
            this.tick();
          }
        );
      }
    }, this.interval);
  };

  render() {
    const {   ...rest } = this.props;
    const { lastTime } = this.state;
    return <span {...rest}>{fixedZero(lastTime)}</span>;
  }
}



PropTypes.defaultProps = {
  children: null,
  time: 60,
  onEnd: null,
};

PropTypes.propTypes = {
  children: PropTypes.node,
  time: PropTypes.number,
};
