import React from 'react';
import ReactDOM from 'react-dom';
import CategoryView from './category';
import mapEveryTwo from '../helpers/map-every-two';
import titleCase from '../helpers/change-case';
import { categories, styles } from '../helpers/constants';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  handleHover(category) {
    console.log('hoverd');
  }

  getRows() {
    return mapEveryTwo(categories, (a, b) => {
      if (a && b) {
        return (
          <div key={a + b} className={styles.rowTextCenter}>
            <div className={styles.col}>
              <h1>{titleCase(a)}</h1>
              <CategoryView category={a} config={this.props.config} callback={this.props.callback} />
            </div>
            <div className={styles.col}>
              <h1>{titleCase(b)}</h1>
              <CategoryView category={b} config={this.props.config} callback={this.props.callback} />
            </div>
          </div>
        );
      } else {
        return (
          <div key={a} className={styles.rowTextCenter}>
            <div className={styles.col}>
              <h1>{titleCase(a)}</h1>
              <CategoryView category={a} config={this.props.config} callback={this.props.callback} />
            </div>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div className={styles.jumbotron}>
        {this.getRows()}
      </div>
    );
  }
}
