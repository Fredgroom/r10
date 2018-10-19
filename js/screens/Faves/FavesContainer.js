import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Faves from './Faves';
import Loader from '../../components/Loader';

export default class FavesContainer extends Component {
  render() {
    return <Faves />;
  }
}
