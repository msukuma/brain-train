import React from 'react';
import { map } from 'lodash';
import { styles, gamesByCategory } from '../constants';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  getRows() {
    return map(gamesByCategory[this.props.category], (game) => {
      <div key={game} className="row justify-content-center">
        <div className='col justify-content-center'>
          {game}
        </div>
      </div>;
    });
  }

  render() {

    <div className={styles.gameCanvas}>
      this.getRows();
    </div>;
  }
}
