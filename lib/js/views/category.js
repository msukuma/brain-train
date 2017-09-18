import React from 'react';
import { map } from 'lodash';
import { gamesByCategory, styles } from '../constants/app';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler(game) {
    return ()=> {
      this.props.callback({
        category: this.props.category,
        game: game,
      });
    };
  }

  getRows() {
    return map(
      gamesByCategory[this.props.category],
      game => <li key={game} onClick={this.clickHandler(game)}>{game}</li>
    );
  }

  render() {
    return <ul className={styles.listUnstyled}>{this.getRows()}</ul>;
  }
}
