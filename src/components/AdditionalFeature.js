import React from 'react';
import { addFeature } from '../actions';
import {connect} from 'react-redux'



const AdditionalFeature = props => {

const featureToAdd = {
  id: props.feature.id,
  name: props.feature.name,
  price: props.feature.price,
} 
  
const handleClick = () => {
  return props.addFeature(featureToAdd)
}
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null,{addFeature})(AdditionalFeature);
