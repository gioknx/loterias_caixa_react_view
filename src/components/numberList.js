var React = require('react');
var PropTypes = React.PropTypes;


var styles = require('../styles');
var key_index = 0;
function NumberList(props) {

  styles.numbers.backgroundColor = props.backgroundColor;

  return (
    <ul style={ { padding: 0 } }>
      { props.numbers.map(function(item) {
        
          return <li style={ styles.numbers } key={ key_index++ }>
                   { item }
                 </li>
        }) }
    </ul>
  )
}

NumberList.propTypes = {
  numbers: PropTypes.array.isRequired
}

NumberList.defaultProps = {
  backgroundColor: "blue"
}

module.exports = NumberList;