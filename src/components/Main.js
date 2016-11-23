var React = require('react');
import { Router, Route, Link } from 'react-router'

var styles = {}
var Main = React.createClass({
  render: function() {
    return (
      <div className="main-content">
        <nav className="navbar">
          <span className="logo">Loterias Net React</span>
          <li className="menu-list-item">
            <Link className="menu-item-link" to="megasena"> megasena
            </Link>
          </li>
          <li className="menu-list-item">
            <Link className="menu-item-link" to="lotomania"> lotomania
            </Link>
          </li>
        </nav>
        { this.props.children }
      </div>
    )
  }
});

module.exports = Main;