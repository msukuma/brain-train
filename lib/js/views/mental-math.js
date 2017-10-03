import React from 'react';
import AnswerView from './answer';
import { styles } from '../constants/app';
import {
  keydown,
  keyToKeyCodeMap,
  numberRegex,
  symbols } from '../constants/mental-math';

export default class MentalMathView extends React.Component {
  constructor(props) {
    super(props);
    this.initialize();
  }

  initialize() {
    this.model = new (this.props.model);
    this.state = this.getState();
  }

  getState() {
    return {
      round: this.model.getRound(),
      firstOperand: this.model.toDisplay.firstOperand,
      secondOperand:  this.model.toDisplay.secondOperand,
      result:  this.model.toDisplay.result,
      answered: false,
    };
  }

  startNewRound() {
    setTimeout(() => {
      document.getElementById('display').className = styles.jumbotron;
      this.model.startNewRound();
      this.setState(this.getState());
    }, 500);
  }

  isNumberKey(e) {
    return numberRegex.test(e.key);
  }

  isSumbitKey(e) {
    return e.keyCode == keyToKeyCodeMap.enter;
  }

  isBackSpaceKey(e) {
    return e.keyCode === keyToKeyCodeMap.backspace;
  }

  isRightAnswer(answer) {
    return answer == this.model.getAnswer();
  }

  isInputPlacholder() {
    return this.getUserInput() === symbols.placeHolder;
  }

  isInputEmpty() {
    return this.getUserInput() === '';
  }

  getUserInput() {
    return this.state[this.model.answerVariable];
  }

  setUserInput(input) {
    const key = this.model.answerVariable;
    this.setState({ key: input });
  }

  immulateBackspace() {
    if (!this.isInputPlacholder()) {
      const input = this.getUserInput();
      input = input.substring(0, input.length - 1);
      this.setUserInput(input);
    }
  }

  addToUserInput(addition) {
    if (this.isInputPlacholder()) {

    } else {

    }

  }

  addKeyDownEvent() {
    document.addEventListener(keydown, this.handleKeyDown.bind(this));
  }

  handleKeyDown(e) {
    let display;
    if (!this.state.answered) {

      if (this.isSumbitKey(e)) {
        this.setState({ answered: true });
        display = document.getElementById('display');

        if (this.isRightAnswer(this.state.answer)) {
          display.className = 'jumbotron btn-success';
        } else {
          display.className = 'jumbotron btn-danger';
        }

        this.startNewRound();
      } else if (this.isBackSpaceKey(e)) {
        this.immulateBackspace();
      } else if (this.isNumberKey(e)) {
        this.addToUserInput(e.key);
      }
    }

  }

  componentDidMount() {
    this.addKeyDownEvent();
  }

  render() {
    return (
      <div id='display' className={styles.jumbotron}>
        <div className="row justify-content-right">
          <div className='col justify-content-center'>
          </div>
          <div className='col justify-content-center'>
            {this.state.firstOperand}
          </div>
        </div>
        <div className="row justify-content-right">
          <div className='col text-right'>
            {this.model.operationSymbol}
          </div>
          <div className='col justify-content-center'>
            {this.state.secondOperand}
          </div>
        </div>
        <div className="row justify-content-right">
          <div className='col justify-content-center'>
          </div>
          <div className='col justify-content-center'>
            {this.model.toDisplay.result}
          </div>
        </div>
      </div>
    );
  }
}
