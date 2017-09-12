import React from 'react';
import { forEach } from 'lodash';
import { keyMap, keyCodes, styles } from '../constants';

export default class Choices extends React.Component {
  constructor(props) {
    super(props);

    this.decided = false;
    this.setRightChoice(this.props);
  }

  setRightChoice(props) {
    for (var key in props.choices) {
      if (props.choices[key] === props.answer) {
        this.rightChoice = key;
      }
    }
  }

  isArrowKey(keyCode) {
    return keyCodes.indexOf(keyCode) !== -1;
  }

  hasDecided() {
    return this.decided;
  }

  handleKeyDown() {
    return (e) => {
      if (this.isArrowKey(e.keyCode) && !this.hasDecided()) {
        if (e.keyCode === keyMap.left) {
          this.rightOrWrong('left');
        } else if (e.keyCode === keyMap.up) {
          this.rightOrWrong('up');
        } else if (e.keyCode === keyMap.right) {
          this.rightOrWrong('right');
        } else if (e.keyCode === keyMap.down) {
          this.rightOrWrong('down');
        }

        this.decided = true;
      }
    };
  }

  isRightChoice(elementId) {
    return elementId === this.rightChoice;
  }

  rightOrWrong(elementId) {
    if (this.isRightChoice(elementId)) {
      document.getElementById(elementId).className = styles.success;
    } else {
      document.getElementById(elementId).className = styles.danger;
      document.getElementById(this.rightChoice).className = styles.success;
    }

    setTimeout(this.props.startNewRound(), 600);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown());
  }

  resetChoiceElements() {
    forEach(
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
    this.setRightChoice(nextProps);
  }

  render() {
    return (
      <div className="container" id='choices'>
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
