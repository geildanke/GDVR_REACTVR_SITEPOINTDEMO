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
      <View>
        <VrButton
          style={{width: 0.7}}
          onClick={()=>this._onViewClicked()}>
          <Image style={{width:1, height:1}}
            source={asset('reactconf_00.jpg')}
            inset={[0.2,0.2,0.2,0.2]}
            insetSize={[0.05,0.45,0.55,0.15]} >
          </Image>
        </VrButton>
      </View>
    );
  }
};

module.exports = Button;
