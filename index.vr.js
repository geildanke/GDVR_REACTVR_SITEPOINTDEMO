import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import Canvas from './components/Canvas';
import UI from './components/UI';

class GDVR_REACTVR_SITEPOINTDEMO extends React.Component {
  render() {
    return (
      <View>
        <Canvas />
        <UI />
      </View>
    );
  }
};

AppRegistry.registerComponent('GDVR_REACTVR_SITEPOINTDEMO', () => GDVR_REACTVR_SITEPOINTDEMO);
