import { StyleSheet } from 'react-native';

import { COLORS } from './constants/colors';

const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.gray,
    flex: 1,
    padding: 16,
  },
  container: {
    backgroundColor: COLORS.white,
    paddingBottom: 12,
    flex: 1,
  },
});

export default styles;
