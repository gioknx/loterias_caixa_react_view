var React = require('react');
var PropTypes = React.PropTypes;


//var styles = require('../styles');

function NumberList(props) {

  var styles = {
    table: {
      margin: "0 auto"
    },
    numbers: {
      display: "inline-block",
      textAlign: "center",
      color: "#fff",
      borderRadius: "50%",
      marginRight: "5px",
      width: "44px",
      height: "44px",
      fontSize: "22px",
      lineHeight: "44px",
      backgroundColor: props.backgroundColor
    }
  };

  var columns = props.numbers.map(function(item, index) {
    return (
      <td style={ styles.numbers } key={ index }>
        { item }
      </td>
    )
  })
  var lineCount = props.colNumber === 0 ? props.numbers.length : props.numbers.length / 1;
  var columnSize = props.colNumber === 0 ? props.numbers.length : props.colNumber;
  var lines = [];

  for (var i = 0; i < lineCount; i++) {
    lines.push(columns.slice(i * columnSize, (i + 1) * columnSize));
  }


  return (
    <table style={ styles.table }>
      <tbody>
        { lines.map(function(item, index) {
            return <tr key={ index }>
                     { item }
                   </tr>
          
          }) }
      </tbody>
    </table>
  )
}

NumberList.propTypes = {
  numbers: PropTypes.array.isRequired
}

NumberList.defaultProps = {
  backgroundColor: "blue",
  colNumber: 0
}

module.exports = NumberList;