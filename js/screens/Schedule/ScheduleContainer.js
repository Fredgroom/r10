import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Schedule from './Schedule';
import Loader from '../../components/Loader';


export default class ScheduleContainer extends Component {
    render() {
        return (
             <Schedule />    
        );
    }
}

