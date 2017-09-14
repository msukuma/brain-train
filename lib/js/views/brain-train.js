import React from 'react';
import ReactDom from 'react-dom';
import GameView from './game';
import CategoryView from './category';
import CategoriesView from './categories';
import MentalMath from '../models/mental-math';
import { gameNames, styles } from '../helpers/constants';

export default class BrainTrainView extends React.Component{
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
        <CategoriesView config={this.state.config} callback={this.configured.bind(this)}/>
        <GameView config={this.state.config} model={this.getModel()} />
      </div>
    );
  }
}
