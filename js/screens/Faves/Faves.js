import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import ConductItem from '../../components/ConductItem';

const Faves = ({  }) => {
    return (
        <ScrollView>
            <View>
                <Text >
                    Faves
                </Text>
            </View>
        </ScrollView>
    )
}

export default Faves;