import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, SectionList } from 'react-native';
import { styles } from './styles';
import {formatAMPM} from '../../config/helpers/scheduleHelper';
import {formatSessionData} from '../../config/helpers/scheduleHelper';



export default class SessionItem extends Component {
    render() {
        const { sessions } = this.props;

        return (
            <View>
                <SectionList
                    renderItem={({ item, index }) => <Text key={index}>{item}</Text>}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ fontWeight: 'bold' }}>{
                            formatAMPM((`${sessions.startTime}`))
                        }</Text>
                        
                    )}
                    sections={[
                        {title: <Text>{sessions.startTime}</Text>, data: [sessions.title, sessions.location] },
                    ]}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
}
SessionItem.propTypes = {
    sessions: PropTypes.shape({
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
    })
};