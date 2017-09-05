import React from 'react';
import _ from 'lodash';
import { keyCodes, keyCodesList, styles } from './constants';

export default class Choices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      round: this.props.round,
    };

    this.decided = false;
  }

  isArrowKey(keyCode) {
    return keyCodesList.indexOf(keyCode) !== -1;
  }

  hasDecided() {
    return this.decided;
  }

  handleKeyDown() {
    return (e) => {
      if (this.isArrowKey(e.keyCode) && !this.hasDecided()) {
        if (e.keyCode === keyCodes.left) {
          this.rightOrWrong(this.props.choices.left, 'left');
        } else if (e.keyCode === keyCodes.up) {
          this.rightOrWrong(this.props.choices.up, 'up');
        } else if (e.keyCode === keyCodes.right) {
          this.rightOrWrong(this.props.choices.right, 'right');
        } else if (e.keyCode === keyCodes.down) {
          this.rightOrWrong(this.props.choices.down, 'down');
        }

        this.decided = true;
      }
    };
  }

  rightOrWrong(choice, elementId) {
    if (choice === this.props.answer) {
      document.getElementById(elementId).className = styles.success;
    } else {
      document.getElementById(elementId).className = styles.danger;
    }

    setTimeout(this.props.startNewRound(), 500);
  }

  resetChoiceElements() {
    _.forEach(
      document.getElementsByClassName('choice'),
      (e) => e.className = styles.default
    );
  }

  resetDecision() {
    this.decided = false;
  }

  componentWillUpdate(nextProps, nextState) {
    this.resetChoiceElements();
    this.resetDecision();
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown());
  }

  render() {
    return (
      <div id='choices'>
        <div className='row justify-content-center'>
          <div className='col text-center'>
            <button id='up' className={styles.default}>{this.props.choices.up}</button>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col text-center'>
            <button id='left' className={styles.default}>{this.props.choices.left}</button>
            <button id='down' className={styles.default}>{this.props.choices.down}</button>
            <button id='right' className={styles.default}>{this.props.choices.right}</button>
          </div>
        </div>
      </div>
    );
  }
}
