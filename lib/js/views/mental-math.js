import React from 'react';
import { styles as appStyles } from '../constants/app';
console.log(appStyles);
import { styles as mmStyles } from '../constants/mental-math';
import {
  answer,
  display,
  keydown,
  keyToKeyCodeMap,
  newRoundDelay,
  numberRegex,
  operationArgumentNames as opArgs } from '../constants/mental-math';

export default class MentalMathView extends React.Component {
  constructor(props) {
    super(props);
    this.initialize();
  }

  initialize() {
    this.model = new (this.props.modelClass);
    this.answered = false;
    this.state = this.getState();
  }

  getState() {
    return {
      round: this.model.round,
      answer: this.model.toDisplay[this.model.answerOperationArgumentName],
    };
  }

  isNumber(input) {
    return numberRegex.test(input);
  }

  isSumbitKey(keyCode) {
    return keyCode == keyToKeyCodeMap.enter;
  }

  isRightAnswer() {
    return this.state.answer == this.model.answer;
  }

  getDomDisplay() {
    return document.getElementById(display);
  }

  getDomInput() {
    return document.getElementById(answer);
  }

  showSuccess() {
    this.getDomInput().className = mmStyles.inputSuccess;
  }

  showFailure() {
    this.getDomInput().className = mmStyles.inputDanger;
  }

  resetInputCss() {
    this.getDomInput().className = mmStyles.input;
  }

  startNewRound() {
    this.model.startNewRound();
    this.answered = false;
    this.resetInputCss();
    this.setState(this.getState());
    this.autoFocus();
  }

  handleKeyDown(e) {
    if (!this.answered && this.isSumbitKey(e.keyCode)) {
      this.answered = true;

      this.isRightAnswer() ? this.showSuccess() : this.showFailure();

      setTimeout(() => {
        this.startNewRound();
      }, newRoundDelay);

    }
  }

  handleChange(e) {
    if (!this.answered && this.isNumber(e.target.value)) {
      this.setState({ answer: e.target.value });
    }
  }

  isOperationArgumentAnswer(variable) {
    return variable === this.model.answerOperationArgumentName;
  }

  autoFocus() {
    this.getDomInput().focus();
  }

  addKeyDownEvent() {
    document.addEventListener(keydown, this.handleKeyDown.bind(this));
  }

  view(opArgName, borderBottom) {
    if (this.isOperationArgumentAnswer(opArgName)) {
      return <input
        id={answer}
        type="text"
        className={mmStyles.input}
        value={this.state.answer}
        onChange={this.handleChange.bind(this)} />;
    } else {
      return <input
        type="text"
        className={mmStyles.input}
        value={this.model.toDisplay[opArgName]} disabled />;
    }
  }

  componentDidMount() {
    this.addKeyDownEvent();
    this.autoFocus();
  }

  render() {
    return (
      <div id={display} className={mmStyles.display}>
        <div className={appStyles.row}>
          <div className={appStyles.colTextRight}>
          </div>
          <div className={appStyles.colTextLeft}>
            {this.view(opArgs.firstOperand)}
          </div>
        </div>
        <div className={appStyles.row}>
          <div className={appStyles.colTextRight}>
            {this.model.operationSymbol}
          </div>
          <div className={appStyles.colTextLeft}>
            {this.view(opArgs.secondOperand)}
          </div>
        </div>
        <div className={appStyles.row}>
          <div className={appStyles.colTextRight}>
          </div>
          <div className={appStyles.colTextLeft}>
            {this.view(opArgs.result)}
          </div>
        </div>
      </div>
    );
  }
}
