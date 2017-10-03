import React from 'react';
import GameWrapper from './game-wrapper';
import CategoryView from './category';
import CategoriesView from './categories';
import MentalMath from '../models/mental-math';
import { gameNames, styles } from '../constants/app';

export default class AppView extends React.Component{
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
    this.setState({ config: config });
  }

  quit() {
    this.setState({ config: null });
  }

  getModel() {
    if (this.state.config) {
      return this.models[this.state.config.game];
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <h1><a className="navbar-brand" href="#">Brain Train</a></h1>
        </nav>
        <div className={styles.container}>
          <CategoriesView
            config={this.state.config}
            callback={this.configured.bind(this)}/>
          <GameWrapper
            config={this.state.config}
            modelClass={this.getModel()}
            quit={this.quit.bind(this)}/>
        </div>
      </div>
    );
  }
}
