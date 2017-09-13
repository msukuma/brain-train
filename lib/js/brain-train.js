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
    this.config = undefined;

    this.state = {
      configured: false,
    };

    this.initializeGames();
  }

  initializeGames() {
    let games = {};
    games[gameNames.MentalMath] = MentalMath;
    this.games = games;
  }

  configured(config) {

    this.setState({
      config: config,
    });
  }

  gameLogic() {
    return this.games[this.config.game];
  }
  
  gameView(){
      switch (this.config.game) {
        case gameNames.MentalMath:
          return <MentalMath>

      }
  }


  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse justify-content-lg-center">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="">Brain Train</a>
              </li>
            </ul>
          </div>
        </nav>
        <Categories config={this.config} callback={this.configured.bind(this)}/>
        <GameR config={this.state.config} gameView={} gameLogic={} />
      </div>
    );
  }
}
