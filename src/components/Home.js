var React = require('react');
var Results = require('../components/results');

var Home = React.createClass({
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
    )

  },
  render: function() {
    return (
      <div>
        <Results backgroundColor="#c2185b"
          colNumber={ 6 }
          isLoading={ this.state.isLoading }
          contest={ this.state.items[0] } />
        <Results colNumber={ 4 }
          backgroundColor="#ff5722"
          isLoading={ this.state.isLoading }
          contest={ this.state.items[1] } />
        <Results backgroundColor="#283593" isLoading={ this.state.isLoading } contest={ this.state.items[2] } />
        <Results backgroundColor="#117e56" isLoading={ this.state.isLoading } contest={ this.state.items[3] } />
        <Results backgroundColor="#ffeb3b" isLoading={ this.state.isLoading } contest={ this.state.items[4] } />
        <Results backgroundColor="#8c0081"
          colNumber={ 5 }
          isLoading={ this.state.isLoading }
          contest={ this.state.items[5] } />
      </div>
    )
  }
});

module.exports = Home;