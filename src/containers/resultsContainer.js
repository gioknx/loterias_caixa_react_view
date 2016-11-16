var React = require('react');

var Results = require('../components/results');


var resultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      items: [{
        "numbers": [],
        "prize": "R$ 0.000.000,00",
        "contest_date": "00/00/0000",
        "contest_number": "0",
        "contest_name": "contest"
      }, {
        "numbers": [],
        "prize": "R$ 0.000.000,00",
        "contest_date": "00/00/0000",
        "contest_number": "0",
        "contest_name": "contest"
      }, {
        "numbers": [],
        "prize": "R$ 0.000.000,00",
        "contest_date": "00/00/0000",
        "contest_number": "0",
        "contest_name": "contest"
      }, {
        "numbers": [],
        "prize": "R$ 0.000.000,00",
        "contest_date": "00/00/0000",
        "contest_number": "0",
        "contest_name": "contest"
      }, {
        "numbers": [],
        "prize": "R$ 0.000.000,00",
        "contest_date": "00/00/0000",
        "contest_number": "0",
        "contest_name": "contest"
      }, {
        "numbers": [],
        "prize": "R$ 0.000.000,00",
        "contest_date": "00/00/0000",
        "contest_number": "0",
        "contest_name": "contest"
      }]
    }
  },
  componentWillMount: function() {
    fetch(`http://localhost:3000/api/loterias/all.json`)
      .then(result => result.json())
      .then(items => {
        this.setState({
          items,
          isLoading: false
        });
      }
    ).then(() => console.log(this.state.items))

  },

  render: function() {
    return (
      <div>
        <Results isLoading={ this.state.isLoading } contest={ this.state.items[0] } />
        <Results backgroundColor="green" isLoading={ this.state.isLoading } contest={ this.state.items[1] } />
        <Results backgroundColor="red" isLoading={ this.state.isLoading } contest={ this.state.items[2] } />
        <Results isLoading={ this.state.isLoading } contest={ this.state.items[3] } />
        <Results isLoading={ this.state.isLoading } contest={ this.state.items[4] } />
        <Results isLoading={ this.state.isLoading } contest={ this.state.items[5] } />
      </div>
      );
  }

});

module.exports = resultsContainer;