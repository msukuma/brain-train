import React from 'react';
import { forEach } from 'lodash';
import { keyMap, keyCodes, styles } from '../constants';

export default class Choices extends React.Component {
  constructor(props) {
    super(props);

    this.decided = false;
  }

  isArrowKey(keyCode) {
    return keyCodes.indexOf(keyCode) !== -1;
  }

  hasDecided() {
    return this.decided;
  }

  handleKeyDown(e) {
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
  }

  isRightChoice(elementId) {
    return elementId === this.props.choices.rightChoice;
  }

  rightOrWrong(elementId) {
    if (this.isRightChoice(elementId)) {
      document.getElementById(elementId).className = styles.success;
    } else {
      document.getElementById(elementId).className = styles.danger;
      document.getElementById(this.props.choices.rightChoice).className = styles.success;
    }

    setTimeout(this.props.startNewRound, 600);
  }

  addKeyDownEvent() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  resetChoiceElements() {
    forEach(document.getElementsByClassName('choice'), (e) => e.className = styles.default);
  }

  resetDecision() {
    this.decided = false;
  }

  componentDidMount() {
    this.addKeyDownEvent();
  }

  componentWillUpdate(nextProps, nextState) {
    this.resetChoiceElements();
    this.resetDecision();
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
