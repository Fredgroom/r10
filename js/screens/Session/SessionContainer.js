import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Session from './Session';
import Loader from '../../components/Loader';
import {formatSessionData} from '../../config/helpers/scheduleHelper'


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

export default class SessionContainer extends Component {
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

