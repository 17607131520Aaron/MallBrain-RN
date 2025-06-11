import { StyleSheet } from 'react-native';

import { COLORS } from '~/constants/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    height: 40,
  },
  labelContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  requiredMark: {
    color: COLORS.required,
    marginRight: 4,
    fontSize: 14,
  },
  label: {
    fontSize: 14,
    color: COLORS.text.primary,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
  },
  focusedContainer: {
    borderColor: COLORS.primary,
  },
  errorContainer: {
    borderColor: COLORS.error,
  },
  disabledContainer: {
    backgroundColor: COLORS.grayBg,
    borderColor: COLORS.border,
  },
  input: {
    flex: 1,
    height: 44,
    paddingHorizontal: 12,
    fontSize: 14,
    color: COLORS.text.primary,
  },
  inputWithPrefix: {
    paddingLeft: 0,
  },
  inputWithSuffix: {
    paddingRight: 0,
  },
  disabledInput: {
    color: COLORS.disabled,
  },
  prefixContainer: {
    paddingLeft: 12,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  suffixContainer: {
    paddingRight: 12,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 4,
  },
});

export default styles;
