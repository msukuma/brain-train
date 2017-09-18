import React from 'react';
import { forEach } from 'lodash';
import { styles as appStyles } from '../constants/app';
import {
  choice,
  keydown,
  keys,
  keyToKeyCodeMap,
  keyCodes,
  styles as mmStyles } from '../constants/mental-math';

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
    if (this.isArrowKey(e.keyCode)) {
      e.preventDefault();
      if (!this.hasDecided()) {
        if (e.keyCode === keyToKeyCodeMap.left) {
          this.rightOrWrong(keys.left);
        } else if (e.keyCode === keyToKeyCodeMap.up) {
          this.rightOrWrong(keys.up);
        } else if (e.keyCode === keyToKeyCodeMap.right) {
          this.rightOrWrong(keys.right);
        } else if (e.keyCode === keyToKeyCodeMap.down) {
          this.rightOrWrong(keys.down);
        }

        this.decided = true;
      }
    }
  }

  isRightChoice(elementId) {
    return elementId === this.props.choices.rightChoice;
  }

  rightOrWrong(elementId) {
    if (this.isRightChoice(elementId)) {
      document.getElementById(elementId).className = mmStyles.rightChoice;
    } else {
      document.getElementById(elementId).className = mmStyles.badChoice;
      document.getElementById(this.props.choices.rightChoice).className = mmStyles.rightChoice;
    }

    setTimeout(this.props.startNewRound, 600);
  }

  addKeyDownEvent() {
    window.addEventListener(keydown, this.handleKeyDown.bind(this));
  }

  resetChoiceElements() {
    forEach(document.getElementsByClassName(choice), (e) => e.className = mmStyles.choice);
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
      <div id='choices' className={appStyles.container}>
        <div className={appStyles.rowTextCenter}>
          <div className={appStyles.colTextCenter}>
            <button id={keys.up} className={mmStyles.choice}>{this.props.choices.up}</button>
          </div>
        </div>
        <div className={appStyles.rowTextCenter}>
          <div className={appStyles.colTextCenter}>
            <button id={keys.left} className={mmStyles.choice}>{this.props.choices.left}</button>
            <button id={keys.down} className={mmStyles.choice}>{this.props.choices.down}</button>
            <button id={keys.right} className={mmStyles.choice}>{this.props.choices.right}</button>
          </div>
        </div>
      </div>
    );
  }
}
