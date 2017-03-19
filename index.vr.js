import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import Canvas from './components/Canvas';
import UI from './components/UI';

class GDVR_REACTVR_SITEPOINTDEMO extends React.Component {

  constructor() {
    super();

    this.state = {
      buttonClicked: false,
    };
  }

  render() {

    return (
      <View>
        <Canvas
          changeTriggered={this.state.buttonClicked}
        />
        <UI
          onClick={()=>{
            this.setState({buttonClicked: true});
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('GDVR_REACTVR_SITEPOINTDEMO', () => GDVR_REACTVR_SITEPOINTDEMO);
