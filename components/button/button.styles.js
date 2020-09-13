import {StyleSheet} from 'react-native';

import colors from '../../assets/colors.js';
import fonts from '../../assets/fonts.js';
import commonStyles from '../../assets/commonStyles.js';

const styles = StyleSheet.create({
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
