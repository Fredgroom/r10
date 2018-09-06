import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, SectionList } from 'react-native';
import { styles } from './styles';
import { formatAMPM } from '../../config/helpers/scheduleHelper';
import { formatSessionData } from '../../config/helpers/scheduleHelper';



export default class SessionItem extends Component {
    render() {
        const { sessions } = this.props;

        return (
            <View>
                <SectionList
                    renderItem={({ item, index }) => 
                    <View key={index}>
                        <Text>{item.title}</Text>
                        <Text>{item.location}</Text>
                    </View>}
                    renderSectionHeader={({ section }) =>

                        <Text style={{ fontWeight: 'bold' }}>
                            {formatAMPM(section.title)}
                        </Text>

                    }
                    sections={this.props.sessions}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
}
SessionItem.propTypes = {
    sessions: PropTypes.array.isRequired,
    title: PropTypes.shape({
        title: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        startTime: PropTypes.object.isRequired,
    })
};

