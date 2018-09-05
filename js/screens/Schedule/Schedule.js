import React from 'react';
import { View, Text, ScrollView, SectionList } from 'react-native';
import SessionItem from '../../components/SessionItem';

const Schedule = ({allSessions}) => {
    return (
        <ScrollView>
            <View>
                <View>
                {allSessions.map((item) => <SessionItem key={item.id} sessions={item} />)}
                </View>
            </View>
        </ScrollView>
    )
}

export default Schedule;