import React, { Component } from 'react';
import { Provider } from 'react-redux';
import reducers from '../Reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Search from '../Components/Search';

import './style.css';

class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Search />
      </Provider>
    );
  }
}

export default App;
