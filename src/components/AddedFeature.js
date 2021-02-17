import React from 'react';
import {removeFeature} from '../actions'
import {connect} from 'react-redux'

const AddedFeature = props => {
  const featureToRemove = {
    id: props.feature.id,
    name: props.feature.name,
    price: props.feature.price,
  }

  const clickHandler = (e) => {
    console.log(props)
    return props.removeFeature(featureToRemove)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={clickHandler} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature);
