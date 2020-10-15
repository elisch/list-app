import React from 'react';
import {TouchableHighlight, View, Text, ActivityIndicator} from 'react-native';
import styles from './button.styles';

const Button = ({label, onPress, type, loading, disabled, style}) => (
  <TouchableHighlight
    style={[style, styles.buttonWrapper]}
    onPress={onPress}
    disabled={disabled || loading}>
    <View style={type === 'round' ? styles.round : styles.button}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.buttonText}>{label}</Text>
      )}
    </View>
  </TouchableHighlight>
);

export default Button;
