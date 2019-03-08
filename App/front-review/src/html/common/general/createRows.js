import React from 'react';

function CreateRows(props) {

  function mapRows(){
    let result = [];
    for (let element in props.data) {
      result.push(<tr>
          <td>{`${element}`}</td>
          <td><input type={element} /></td>
          <td>{`${props.data[element]}`}</td>
        </tr>);
    }
    return result;
  }

  return (
    mapRows()
  );
}

export default CreateRows;
