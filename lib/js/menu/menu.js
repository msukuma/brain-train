import React from 'react';
import Categories from './categories';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse justify-content-lg-center">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="">Brain Train</a>
              </li>
            </ul>
          </div>
        </nav>
        <div id="categories">
          <Categories />
        </div>
      </div>
    );
  }
}
