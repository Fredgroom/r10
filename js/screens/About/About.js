import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import ConductItem from '../../components/ConductItem';

const About = ({ allConducts }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.heading}>Date & Venue</Text>
      <Text style={styles.paragraph}>
        The R10 conference will take place on 27 June 2019 at Olympia London.
      </Text>
      <Text style={styles.heading}>Code of Conduct</Text>
      <View style={styles.component}>
        {allConducts.map((item) => (
          <ConductItem key={item.id} itemData={item} />
        ))}
      </View>
      <Text style={styles.footer}>&copy; RED Academy London</Text>
    </ScrollView>
  );
};

About.propTypes = {
  allConducts: PropTypes.array.isRequired,
};

export default About;
