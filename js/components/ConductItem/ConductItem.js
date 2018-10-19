import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  UIManager,
} from 'react-native';
import { styles } from './styles';

export default class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  render() {
    const { itemData } = this.props;

    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.conductHeader}>
            {this.state.clicked ? '- ' : '+ '}
            {itemData.title}
          </Text>
          {this.state.clicked && (
            <Text style={styles.conductText}>{itemData.description}</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

ConductItem.propTypes = {
  itemData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
