import React from 'react';

export default class GameR extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.config ? <h1>{this.props.config.game}</h1> : null;
  }
}
