import React, { Component } from 'react';
import Realm from 'realm';
import { ApolloProvider } from 'react-apollo';
import RootStack from './navigation/RootStackNavigator';
import client from './config/api';
import realm from './config/models';
import {removeFave} from './config/models';


export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStack />
      </ApolloProvider>
    );
  }
}







