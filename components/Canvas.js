import React from 'react';
import {
  asset,
  Pano,
  View,
} from 'react-vr';

class Canvas extends React.Component {

  constructor(props) {
    super();

    this.state = {
      changeTriggered: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.changeTriggered === false && nextProps.changeTriggered === true) {
      console.log('CHANGE!');
    }
  }

  render() {

    return (
      <View>
        <Pano source={asset('reactconf_00.jpg')}/>
      </View>
    );
  }
};

module.exports = Canvas;
