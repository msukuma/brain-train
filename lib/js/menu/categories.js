import React from 'react';
import ReactDOM from 'react-dom';
import Category from './category';
import mapEveryTwo from './map-every-two';
import capitalize from './capitalize';
import { categories } from '../constants';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(category) {
    return null;
  }

  getRows() {
    return mapEveryTwo(categories, (a, b) => {
      if (a && b) {
        return (
          <div key={a + b} className="row text-center">
            <div className="col" onClick={this.handleClick(a)}>
              <h1 className="category">{capitalize(a)}</h1>
              <Category category={a} config={this.props.config} callback={this.props.callback} />
            </div>
            <div className="col" onClick={this.handleClick(b)}>
              <h1 className="category">{capitalize(b)}</h1>
              <Category category={b} config={this.props.config} callback={this.props.callback} />
            </div>
          </div>
        );
      } else {
        return (
          <div key={a} className="row text-center">
            <div className="col" onClick={this.handleClick(a)}>
              <h1 className="category">{capitalize(a)}</h1>
              <Category category={a} config={this.props.config} callback={this.props.callback} />
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
