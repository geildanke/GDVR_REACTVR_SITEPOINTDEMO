import React from 'react';
import {
  View,
} from 'react-vr';
import Button from './Button';

class UI extends React.Component {

  constructor(props) {
    super(props);

    this.buttons = this.props.buttonConfig;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.buttonConfig) {
      this.buttons = nextProps.buttonConfig;
    }
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
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          transform: [
            {translate: [-1.5, 0, -3]},
          ],
          width: 3,
        }}
      >
        {buttons}
      </View>
    );
  }
};

module.exports = UI;
