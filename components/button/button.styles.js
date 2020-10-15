import {StyleSheet} from 'react-native';

import colors from '../../assets/colors.js';
import fonts from '../../assets/fonts.js';
import commonStyles from '../../assets/commonStyles.js';

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
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
  round: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 88,
    width: 88,
    borderRadius: 44,
    alignSelf: 'flex-end',
    ...commonStyles.shadow,
  },
});

export default styles;
