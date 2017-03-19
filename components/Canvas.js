import React from 'react';
import {
  asset,
  Pano,
  View,
} from 'react-vr';

class Canvas extends React.Component {

  render() {

    return (
      <View>
        <Pano source={asset('reactconf_00.jpg')}/>
      </View>
    );
  }
};

module.exports = Canvas;
