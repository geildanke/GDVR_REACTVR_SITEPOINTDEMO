import React from 'react';
import {
  Animated,
  View,
} from 'react-vr';
import Button from './Button';

const Easing = require('Easing');

class UI extends React.Component {

  constructor(props) {
    super(props);

    this.buttons = this.props.buttonConfig;
    this.state = {
      animatedOpacity: new Animated.Value(1),
      animatedRotationX: new Animated.Value(-10),
    };
  }

  componentWillMount() {
    this.fadeOut();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.buttonConfig) {
      this.buttons = nextProps.buttonConfig;
    }
  }

  fadeIn() {
    Animated.parallel([
      Animated.timing(
        this.state.animatedOpacity,
        {
          toValue: 1,
          duration: 250,
          delay: 5000,
        }
      ),
      Animated.timing(
        this.state.animatedRotationX,
        {
          toValue: -10,
          duration: 250,
          delay: 5000,
          easing: Easing.quad,
        }
      ),
    ]).start();
  }

  fadeOut() {
    Animated.parallel([
      Animated.timing(
        this.state.animatedOpacity,
        {
          toValue: 0.25,
          duration: 250,
          delay: 5000,
        }
      ),
      Animated.timing(
        this.state.animatedRotationX,
        {
          toValue: -12,
          duration: 250,
          delay: 5000,
          easing: Easing.quad,
        }
      ),
    ]).start();
  }

  render () {

    const buttons = this.buttons.map((button) =>
      <Button
        key={button.key}
        onClick={()=>{
          this.props.onClick(button.key);
        }}
        src={button.buttonImageSrc}
      />
      );

    return (
      <Animated.View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          opacity: this.state.animatedOpacity,
          transform: [
            {rotateX: this.state.animatedRotationX},
            {translate: [-1.5, 0, -3]},
          ],
          width: 3,
        }}
      >
        {buttons}
      </Animated.View>
    );
  }
};

module.exports = UI;
