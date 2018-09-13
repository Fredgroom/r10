import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';

const Session = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Session</Text>
        </ScrollView>
    );
}

export default Session;