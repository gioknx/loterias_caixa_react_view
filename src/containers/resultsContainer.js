var React = require('react');

var Results = require('../components/results');

var updateData = function() {
  var uri = "http://localhost:3000/api/loterias/" + this.props.route.contestName + ".json";
  fetch(uri)
    .then(result => result.json())
    .then(contest => {
      this.setState({
        contest,
        isLoading: false
      });
    }
  )
}
var resultsContainer = React.createClass({

  getInitialState: function() {
    return {
      isLoading: true,
      contest: {
        "numbers": [],
        "prize": "R$ 0.000.000,00",
        "contest_date": "00/00/0000",
        "contest_number": "0",
        "contest_name": "contest"
      }
    }
  },
  componentWillMount: function() {
    this.setState({
      backgroundColor: this.props.backgroundColor,
      isLoading: true
    });
    updateData = updateData.bind(this);

    updateData();
  },
  componentWillReceiveProps: function() {
    this.setState({
      backgroundColor: this.props.route.backgroundColor,
      isLoading: true
    });
    updateData = updateData.bind(this);
    updateData();
  },
  render: function() {
    return (
      <div>
        <Results backgroundColor={ this.state.backgroundColor } isLoading={ this.state.isLoading } contest={ this.state.contest } />
      </div>
      );
  }

});

module.exports = resultsContainer;
