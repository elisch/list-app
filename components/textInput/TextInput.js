import React from 'react';
import {Text, TextInput, View, TouchableHighlight} from 'react-native';
import EyeIcon from '../../assets/icons/eye.icon';
import styles from './text-input.styles';

const CustomTextInput = ({value, onChange, label, isPassword}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChange}
          value={value}
          secureTextEntry={isPassword && !showPassword && true}
        />
        {isPassword && (
          <TouchableHighlight onPress={() => setShowPassword(!showPassword)}>
            <EyeIcon hide={showPassword} />
          </TouchableHighlight>
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;
