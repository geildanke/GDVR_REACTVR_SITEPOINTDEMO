import React from 'react';
import {
  View,
} from 'react-vr';
import Button from './Button';

class UI extends React.Component {

  render () {

    return (
      <View
        style={{
          transform: [
            {translate: [-1, 0, -3]},
          ],
          width: 2,
        }}
      >
        <Button />
      </View>
    );
  }
};

module.exports = UI;
