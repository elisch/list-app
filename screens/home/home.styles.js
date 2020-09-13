import {StyleSheet} from 'react-native';

import colors from '../../assets/colors.js';
import fonts from '../../assets/fonts.js';
import commonStyles from '../../assets/commonStyles.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
    backgroundColor: colors.main_dark,
  },
  listItem: {
    backgroundColor: colors.white,
    paddingVertical: 18,
    marginBottom: 20,
    paddingHorizontal: 12,
    borderRadius: 7,
    ...commonStyles.shadow,
  },
});

export default styles;
