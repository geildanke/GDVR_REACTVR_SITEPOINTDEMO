import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import Canvas from './components/Canvas';

class GDVR_REACTVR_SITEPOINTDEMO extends React.Component {
  render() {
    return (
      <View>
        <Canvas />
      </View>
    );
  }
};

AppRegistry.registerComponent('GDVR_REACTVR_SITEPOINTDEMO', () => GDVR_REACTVR_SITEPOINTDEMO);
