import React from 'react';
import { View, Text, ScrollView, SectionList } from 'react-native';
import SessionItem from '../../components/SessionItem';


const Schedule = ({allSessions}) => {
    return (
        <ScrollView>
            <View>
                <View>
                 <SessionItem sessions={allSessions} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Schedule;