import {StyleSheet} from 'react-native';
import colors from '../../assets/colors.js';
import fonts from '../../assets/fonts.js';
import commonStyles from '../../assets/commonStyles.js';

const styles = StyleSheet.create({
  ...commonStyles,
  container: {
    flex: 1,
    backgroundColor: colors.white,
    opacity: 0.5,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.main_dark,
    padding: 50,
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 60,
    padding: 30,
    backgroundColor: colors.main_light,
  },
  welcome: {
    // fontFamily: fonts.thin,
    fontSize: 36,
    color: colors.text_dark,
  },
  box: commonStyles.box,
  signIn: {
    marginTop: 35,
    color: colors.text_dark,
    // fontFamily: fonts.medium,
    fontSize: 18,
  },
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
  buttonWrapper: {
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    backgroundColor: colors.button,
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 20,
    color: colors.white,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontSize: 12,
  },
  newAccountButton: {
    marginTop: 36,
    fontSize: 18,
  },
});

export default styles;
