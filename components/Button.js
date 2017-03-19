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

    this.state ={
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

    console.log(this.state.translation);

    return (
      <Animated.View
        style={{
          alignItems: 'stretch',
          flexDirection: 'row',
          transform: [
            {translateZ: this.state.translation},
          ],
          width: 2,
        }}
      >
        <VrButton
          onClick={()=>this.onButtonClick()}
          onEnter={()=>this.onButtonEntered()}
          onExit={()=>this.onButtonExit()}
        >
          <Image
            style={{
              width: 1,
              height: 1,
            }}
            source={asset('button-yellow.png')}
          >
          </Image>
        </VrButton>
      </Animated.View>
    );
  }
};

module.exports = Button;
