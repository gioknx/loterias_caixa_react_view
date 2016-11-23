var React = require('react');

var Results = require('../components/results');


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
    var uri = "http://localhost:3000/api/loterias/" + this.props.route.contestName + ".json";
    console.log(uri);
    fetch(uri)
      .then(result => result.json())
      .then(contest => {
        console.log("COntest", contest);
        this.setState({
          contest,
          isLoading: false
        });
      }
    )

  },
  render: function() {
    return (
      <div>
        <Results backgroundColor={ this.props.backgroundColor } isLoading={ this.props.isLoading } contest={ this.state.contest } />
      </div>
      );
  }

});

module.exports = resultsContainer;
