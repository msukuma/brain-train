import React from 'react';
import { map } from 'lodash';
import { styles, gamesByCategory } from '../helpers/constants';

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
    return map(gamesByCategory[this.props.category], (game) => {
      return (
        <div key={game} onClick={this.clickHandler(game)} className={styles.rowTextCenter}>
          <div className={styles.colTextCenter}>
            {game}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="category-items">
      {this.getRows()}
      </div>
    );
  }
}
