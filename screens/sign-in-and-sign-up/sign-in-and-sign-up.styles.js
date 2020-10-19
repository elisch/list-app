import {StyleSheet} from 'react-native';
import colors from '../../assets/colors.js';
import fonts from '../../assets/fonts.js';
import commonStyles from '../../assets/commonStyles.js';

const styles = StyleSheet.create({
  ...commonStyles,
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.main_light,
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
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 60,
    padding: 30,
  },
  welcome: {
    // fontFamily: fonts.thin,
    fontSize: 36,
    color: colors.black,
  },
  box: commonStyles.box,
  signIn: {
    marginTop: 35,
    color: colors.black,
    // fontFamily: fonts.medium,
    fontSize: 18,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontSize: 12,
  },
  newAccountButton: {
    marginTop: 36,
    fontSize: 18,
  },
  button: {
    marginTop: 40,
    width: 200,
  },
});

export default styles;
