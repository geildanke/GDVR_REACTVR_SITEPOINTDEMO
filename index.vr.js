import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import Canvas from './components/Canvas';
import UI from './components/UI';

const Config = [
  {
    key: 0,
    imageSrc: 'reactconf_00.jpg',
    buttonImageSrc: 'button-yellow.png',
  },
  {
    key: 1,
    imageSrc: 'reactconf_01.jpg',
    buttonImageSrc: 'button-yellow.png',
  },
  {
    key: 2,
    imageSrc: 'reactconf_02.jpg',
    buttonImageSrc: 'button-yellow.png',
  },
  {
    key: 3,
    imageSrc: 'reactconf_03.jpg',
    buttonImageSrc: 'button-yellow.png',
  }
];

class GDVR_REACTVR_SITEPOINTDEMO extends React.Component {

  constructor() {
    super();

    this.state = {
      buttonClicked: false,
      src: 'reactconf_00.jpg',
    };
  }

  render() {

    return (
      <View>
        <Canvas
          src={this.state.src}
          changeTriggered={this.state.buttonClicked}
        />
        <UI
          buttonConfig={Config}
          onClick={(key)=>{
            this.setState({buttonClicked: true});
            this.setState({src: Config[key].imageSrc});
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('GDVR_REACTVR_SITEPOINTDEMO', () => GDVR_REACTVR_SITEPOINTDEMO);
