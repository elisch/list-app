import React from 'react';
import {Text, TextInput} from 'react-native';

import styles from './text-input.styles';

const CustomTextInput = ({value, onChange, label}) => (
  <>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput style={styles.textInput} onChangeText={onChange} value={value} />
  </>
);

export default CustomTextInput;
