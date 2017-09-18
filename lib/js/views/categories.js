import React from 'react';
import CategoryView from './category';
import { titleCase, mapEveryTwo } from '../helpers/mental-math';
import { categoriesArray as categories, styles } from '../constants/app';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
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
