import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Schedule from './Schedule';
import Loader from '../../components/Loader';

const allSessionQuery = gql`
    query {
        allSessions{
            title
            location
            startTime
            id
        }
    }    
`;


export default class ScheduleContainer extends Component {
    render() {
        return (
            <Query query={allSessionQuery}>
                {
                    ({ loading, data }) => {
                        if (loading || !data) {
                            return <Loader />
                        }
                        return <Schedule allSessions={data.allSessions} />
                    }
                }
            </Query>
        )
    }
}


