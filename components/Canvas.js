import React from 'react';
import {
  asset,
  Pano,
} from 'react-vr';

class Canvas extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      changeTriggered: false,
      src: this.props.src,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.changeTriggered === false && nextProps.changeTriggered === true) {
      this.setState({src: nextProps.src});
    }
  }

  render() {

    return (
      <Pano source={asset(this.state.src)}/>
    );
  }
};

module.exports = Canvas;
