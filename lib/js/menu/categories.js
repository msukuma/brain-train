import React from 'react';
import ReactDOM from 'react-dom';
import { categories } from '../constants';
import Category from './category';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  mapEveryTwo(items, fn) {
    let i;
    let mapped = [];

    for (i = 0; i + 1 < items.length; i += 2) {
      mapped.push(fn(items[i], items[i + 1]));
    }

    if (items.length % 2 !== 0) {
      mapped.push(fn(items[items.length - 1]));
    }

    return mapped;
  }

  capitalize(s) {
    return s.substring(0, 1).toUpperCase() + s.substring(1);
  }

  handleClick(category) {
    return () => {
      <Category category={category} />;
    };
  }

  getRows() {
    return this.mapEveryTwo(categories, (a, b) => {
      if (a && b) {
        return (
          <div key={a + b} className="row justify-content-center">
            <div className="col-2 justify-content-center text-center" onClick={this.handleClick(a)}>
            {this.capitalize(a)}
            </div>
            <div className="col-2 justify-content-center text-center" onClick={this.handleClick(b)}>
            {this.capitalize(b)}
            </div>
          </div>
        );
      } else {
        return (
          <div key={a} className="row justify-content-center">
            <div className="col-2 justify-content-center text-center" onClick={this.handleClick(a)}>
            {this.capitalize(a)}
            </div>
          </div>
        );
      }
    });
  }

  render() {

    return (
      <div className="jumbotron">
        {this.getRows()}
      </div>
    );
  }
}
