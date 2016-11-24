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
            <Link className="menu-item-link" to="/lotofacil"> lotofacil
            </Link>
          </li>
          <li className="menu-list-item">
            <Link className="menu-item-link" to="/timemania"> timemania
            </Link>
          </li>
          <li className="menu-list-item">
            <Link className="menu-item-link" to="/megasena"> megasena
            </Link>
          </li>
          <li className="menu-list-item">
            <Link className="menu-item-link" to="/quina"> quina
            </Link>
          </li>
          <li className="menu-list-item">
            <Link className="menu-item-link" to="/lotomania"> lotomania
            </Link>
          </li>
          <li className="menu-list-item">
            <Link className="menu-item-link" to="/duplasena"> duplasena
            </Link>
          </li>
          <li className="menu-list-item">
            <Link className="menu-item-link" to="/"> Home
            </Link>
          </li>
        </nav>
        { this.props.children }
      </div>
    )
  }
});

module.exports = Main;