import React from 'react';
import {
  asset,
  Image,
  View,
  VrButton,
} from 'react-vr';

class Button extends React.Component {

  render () {

    return (
      <View
        style={{
          alignItems: 'stretch',
          flexDirection: 'row',
          width: 2,
        }}
      >
        <VrButton
          style={{
            backgroundColor: 'red',
            height: 0.25,
          }}
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
      </View>
    );
  }
};

module.exports = Button;
