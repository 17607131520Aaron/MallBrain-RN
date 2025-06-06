import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '~/constants/colors';

const styles = StyleSheet.create({
  button: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
  },
  customStyle: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
  },
  disabled: {
    backgroundColor: '#B2B4BF',
  },
  cancel: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderWidth: 1,
  },
  default: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderWidth: 1,
  },
  primaryLine: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  errorLine: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.error,
    borderWidth: 1,
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  warning: {
    backgroundColor: COLORS.warn,
  },
  error: {
    backgroundColor: COLORS.error,
  },
  defaultText: {
    color: COLORS.title,
  },
  cancelText: {
    color: COLORS.content,
  },
  primaryLineText: {
    color: COLORS.primary,
  },
  primaryText: {
    color: COLORS.white,
  },
  errorLineText: {
    color: COLORS.error,
  },
  warningText: {
    color: COLORS.white,
  },
  errorText: {
    color: COLORS.white,
  },
  boldText: {
    fontWeight: 'bold',
  },
  loading: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
});

export default styles;
