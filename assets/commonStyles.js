import colors from './colors.js';

const commonStyles = {
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 13,

    elevation: 5,
  },
  box: {
    width: '100%',
    marginTop: 13,
    padding: 25,
    backgroundColor: colors.white,
    borderRadius: 32,
    ...this.shadow,
  },
};

export default commonStyles;
