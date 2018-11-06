import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { formatSessionData } from '../../lib/helpers';
import Faves from './Faves';
import FavesContext from '../../context/FavesContext';
import Loader from '../../components/Loader';

const allSessionsQuery = gql`
  query {
    allSessions {
      startTime
      title
      location
      id
      description
      speaker {
        id
      }
    }
  }
`;

export default class FavesContainer extends Component {
  render() {
    return (
      <Query query={allSessionsQuery}>
        {({ loading, data }) => {
          if (loading || !data) {
            return <Loader />;
          }
          return (
            <FavesContext.Consumer>
              {(values) => {
                const allFaves = [];
                values.faveIds.map((item) => allFaves.push(item.id));
                const filteredSessionIds = data.allSessions.filter((session) =>
                  allFaves.includes(session.id)
                );
                return (
                  <Faves
                    allSessions={formatSessionData(filteredSessionIds)}
                    faveIds={values.faveIds}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}