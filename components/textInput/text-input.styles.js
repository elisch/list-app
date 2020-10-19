import {StyleSheet} from 'react-native';
import colors from '../../assets/colors.js';
import fonts from '../../assets/fonts.js';
import commonStyles from '../../assets/commonStyles.js';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
  },
  inputLabel: {
    fontSize: 12,
    color: colors.text_dark,
    // fontFamily: fonts.regular,
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    overflow: 'hidden',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: colors.main_dark,
    height: 40,
  },
  textInput: {
    width: '90%',
    height: 40,
  },
});

export default styles;
