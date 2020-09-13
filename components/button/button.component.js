import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import styles from './button.styles';

const Button = ({type}) => (
  <TouchableHighlight>
    <View style={type === 'round' ? styles.round : styles.button}>
      <Text>+</Text>
    </View>
  </TouchableHighlight>
);

export default Button;
