import React from 'react';
import ReactDom from 'react-dom';
import GameR from './game-r';
import Category from './menu/category';
import Categories from './menu/categories';
import MentalMath from './mental-math/mental-math';
import { gameNames } from './constants';

export default class BrainTrain extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      configured: false,
    };

    this.initializeModels();
  }

  initializeModels() {
    let models = {};
    models[gameNames.MentalMath] = MentalMath;
    this.models = models;
  }

  configured(config) {

    this.setState({
      config: config,
    });
  }

  getModel() {
    if (this.state.config) {
      return this.models[this.state.config.game];
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('BrainTrain componentWillUpdate', nextState);
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
          <div className="collapse navbar-collapse justify-content-lg-center">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="">Brain Train</a>
              </li>
            </ul>
          </div>
        </nav>
        <Categories config={this.state.config} callback={this.configured.bind(this)}/>
        <GameR config={this.state.config} model={this.getModel()} />
      </div>
    );
  }
}
