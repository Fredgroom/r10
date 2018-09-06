import React from 'react';
import { View, Text, ScrollView, SectionList } from 'react-native';
import SessionItem from '../../components/SessionItem';


const Session = ({allSessions}) => {
    return (
        <ScrollView>
            <View>
                <View>
                 <Session sessions={allSessions} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Session;