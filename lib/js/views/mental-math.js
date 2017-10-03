import React from 'react';
import { styles } from '../constants/app';
import {
  answer,
  keydown,
  keyToKeyCodeMap,
  newRoundDelay,
  numberRegex,
  operationArguments as opArgs } from '../constants/mental-math';

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
      round: this.model.getRound(),
      answer: this.model.toDisplay[this.model.answerOperationArgumentName],
    };
  }

  isNumber(input) {
    return numberRegex.test(input);
  }

  isSumbitKey(keyCode) {
    // console.log('keyCode', keyCode, keyCode == keyToKeyCodeMap.enter);
    return keyCode == keyToKeyCodeMap.enter;
  }

  isRightAnswer() {
    return this.state.answer == this.model.getAnswer();
  }

  getDomInput() {
    return document.getElementById(answer);
  }

  resetInputCss() {
    this.getDomInput().className = styles.textRight;
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

      const DOMInput = this.getDomInput();

      if (this.isRightAnswer()) {
        DOMInput.className += ' btn-success';
      } else {
        DOMInput.className += ' btn-danger';
      }

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

  view(opArgName) {
    if (this.isOperationArgumentAnswer(opArgName)) {
      return <input
        id={answer}
        type="text"
        className={styles.textRight}
        value={this.state.answer}
        onChange={this.handleChange.bind(this)} />;
    } else {
      return <input
        type="text"
        className={styles.textRight}
        value={this.model.toDisplay[opArgName]} disabled />;
    }
  }

  componentDidMount() {
    this.addKeyDownEvent();
    this.autoFocus();
  }

  render() {
    return (
      <div id='display' className={`${styles.jumbotron} ${styles.textRight}`}>
        {this.view(opArgs.firstOperand)}<br/>
        {this.model.operationSymbol} {this.view(opArgs.secondOperand)}<br/>
        {this.view(opArgs.result)}<br/>
      </div>
    );
  }
}
