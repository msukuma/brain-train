import React from 'react';
import { forEach } from 'lodash';
import { styles as appStyles } from '../constants/app';
import {
  answer,
  keydown,
  numberRegex,
  keyToKeyCodeMap,
  styles as mmStyles } from '../constants/mental-math';

export default class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: '',
      answered: false,
    };
  }

  isNumber(input) {
    return numberRegex.test(input);
  }

  isSumbitKey(keyCode) {
    return keyCode == keyToKeyCodeMap.enter;
  }

  isRightAnswer(answer) {
    return answer == this.props.rightAnswer;
  }

  addKeyDownEvent() {
    document.addEventListener(keydown, this.handleKeyDown.bind(this));
  }

  setDOMInput() {
    this.DOMInput = document.getElementById(answer);
  }

  resetDOMInputCss() {
    this.DOMInput.className = '';
  }

  startNewRound() {
    setTimeout(()=> {
      this.resetDOMInputCss();
      this.setState({
        answer: '',
        answered: false, });
      this.props.startNewRound();
    }, 500);
  }

  handleChange(e) {
    if (!this.state.answered && this.isNumber(e.target.value)) {
      this.setState({
        answer: e.target.value,
      });
    }
  }

  handleKeyDown(e) {
    if (this.isSumbitKey(e.keyCode)) {
      this.setState({ answered: true });

      if (this.isRightAnswer(this.state.answer)) {
        this.DOMInput.className = 'btn-success';
      } else {
        this.DOMInput.className = 'btn-danger';
      }

      this.startNewRound();
    }
  }

  componentDidMount() {
    this.addKeyDownEvent();
    this.setDOMInput();
  }

  render() {
    return <input id="answer" type="text" value={this.state.answer} onChange={this.handleChange.bind(this)}/>;
  }
}
