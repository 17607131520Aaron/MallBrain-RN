import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from './data';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  toastText: {
    backgroundColor: COLORS.TOAST_BACKGROUND,
    borderRadius: 10,
    color: COLORS.TOAST_TEXT,
    marginTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingTop: 5,
    paddingRight: 15,
  },
});

export default styles;
