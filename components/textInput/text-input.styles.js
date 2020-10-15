import {StyleSheet} from 'react-native';
import colors from '../../assets/colors.js';
import fonts from '../../assets/fonts.js';
import commonStyles from '../../assets/commonStyles.js';

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 12,
    color: colors.text_dark,
    // fontFamily: fonts.regular,
  },
  textInput: {
    marginVertical: 10,
    height: 37,
    padding: 10,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 7,
  },
});

export default styles;
