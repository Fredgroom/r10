import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import About from './About';
import Loader from '../../components/Loader';

export default class AboutContainer extends Component {
  render() {
    return (
      <Query query={allConductsQuery}>
        {({ loading, data }) => {
          if (loading || !data) {
            return <Loader />;
          }
          return <About allConducts={data.allConducts} />;
        }}
      </Query>
    );
  }
}

const allConductsQuery = gql`
  query {
    allConducts {
      title
      description
      id
    }
  }
`;
