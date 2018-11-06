import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { formatSessionData } from '../../lib/helpers';
import FavesContext from '../../context/FavesContext';
import Loader from '../../components/Loader';
import Schedule from './Schedule';

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

export default class ScheduleContainer extends Component {
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
                return (
                  <Schedule
                    allSessions={formatSessionData(data.allSessions)}
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