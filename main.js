import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import TodoList from './components/TodoList';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <TodoList />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


Expo.registerRootComponent(App);
