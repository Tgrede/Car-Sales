import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducer from './reducers/index'


const store = createStore(reducer)

const newState = store.getState() 
console.log(newState)


const App = (props) => {

  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header car={newState.car} />
          <AddedFeatures car={newState.car} />
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures={newState.additionalFeatures} />
          <Total car={newState.car} additionalPrice={newState.additionalPrice} />
        </div>
      </div>
    </Provider>
  );
};

export default App;
