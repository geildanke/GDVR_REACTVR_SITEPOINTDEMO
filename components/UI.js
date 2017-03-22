import React from 'react';
import {
  Animated,
  View,
} from 'react-vr';
import Button from './Button';

class UI extends React.Component {

  constructor(props) {
    super(props);

    this.buttons = this.props.buttonConfig;
    this.state = {
      animatedOpacity: new Animated.Value(1),
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

  fadeOut() {
    Animated.timing(
      this.state.animatedOpacity,
      {
        toValue: 0,
        duration: 1500,
        delay: 5000,
      }
    ).start();
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
          justifyContent: 'center',
          opacity: this.state.animatedOpacity,
          transform: [
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
