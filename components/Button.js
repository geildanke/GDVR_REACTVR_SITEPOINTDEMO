import React from 'react';
import {
  Animated,
  asset,
  Image,
  View,
  VrButton,
} from 'react-vr';

const Easing = require('Easing');

class Button extends React.Component {

  constructor(props) {
    super();

    this.state = {
      translation: new Animated.Value(0),
    };
  }

  animateIn() {
    Animated.timing(
      this.state.translation,
      {
        toValue: 0.125,
        duration: 100,
        easing: Easing.in,
      }
    ).start();
  }

  animateOut() {
    Animated.timing(
      this.state.translation,
      {
        toValue: 0,
        duration: 100,
        easing: Easing.in,
      }
    ).start();
  }

  onButtonClick() {
    console.log('OnButtonClicked');
    this.props.onClick();
  }

  onButtonEntered() {
    console.log('OnButtonEntered');
    this.animateIn();
  }

  onButtonExit() {
    console.log('OnButtonExit');
    this.animateOut();
  }

  render () {

    return (
      <Animated.View
        style={{
          alignItems: 'stretch',
          flexDirection: 'row',
          margin: 0.0125,
          transform: [
            {translateZ: this.state.translation},
          ],
          width: 0.7,
        }}
      >
        <VrButton
          onClick={()=>this.onButtonClick()}
          onEnter={()=>this.onButtonEntered()}
          onExit={()=>this.onButtonExit()}
        >
          <Image
            style={{
              width: 0.7,
              height: 0.7,
            }}
            source={asset(this.props.src)}
          >
          </Image>
        </VrButton>
      </Animated.View>
    );
  }
};

module.exports = Button;
