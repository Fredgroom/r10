import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';

import ConductItem from '../../components/ConductItem';

const Faves = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.container}>I can be seen an all platforms.</Text>
        {Platform.OS === 'ios' && (
          <Text>You'll only see me on iOS devices.</Text>
        )}
        {Platform.Version === 24 && (
          <Text>And I'm only on Android devices running Nougat.</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Faves;

import { Platform, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
});
