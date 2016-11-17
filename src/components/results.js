import './../styles/resultsContainer.css';


var React = require('react');
var PropTypes = React.PropTypes;

var NumberList = require('./numberList');
var styles = require('../styles');

var Loading = require('./Loading');

function Results(props) {

  if (props.isLoading)
    return <Loading/>;

  return (
    <div style={ styles.results }>
      <h1>{ props.contest.contest_name }</h1>
      <h3>Concurso: { props.contest.contest_number }</h3>
      <h3>Data: { props.contest.contest_date }</h3>
      <div style={ { textAlign: "center" } }>
        <NumberList colNumber={ props.colNumber } backgroundColor={ props.backgroundColor } numbers={ props.contest.numbers } />
      </div>
      <h2 style={ { float: "right" } }>Premio: { props.contest.prize }</h2>
    </div>
  )
}

Results.propTypes = {
  contest: React.PropTypes.shape({
    numbers: PropTypes.array.isRequired,
    prize: PropTypes.string.isRequired,
    contest_number: PropTypes.string.isRequired,
    contest_date: PropTypes.string.isRequired,
    contest_name: PropTypes.string.isRequired
  })
}




/*
function Results(props) {
  return (
    <div style={ styles.results }>
      <h1>{ props.contest_name }</h1>
      <h3>Concurso: { props.contest_number }</h3>
      <h3>Data: { props.contest_date }</h3>
      <div style={ { textAlign: "center" } }>
        <NumberList numbers={ props.numbers } />
      </div>
      <h2 style={ { float: "right" } }>Premio: { props.prize }</h2>
    </div>
  )
}

Results.propTypes = {
  numbers: PropTypes.array.isRequired,
  prize: PropTypes.string.isRequired,
  contest_number: PropTypes.number.isRequired,
  contest_date: PropTypes.string.isRequired,
  contest_name: PropTypes.string.isRequired
}*/

module.exports = Results;