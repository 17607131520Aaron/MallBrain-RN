import { StyleSheet } from 'react-native';

import { COLORS } from '~/constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: COLORS.text.primary,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: COLORS.grayBg,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  roleSelector: {
    marginTop: 10,
    marginBottom: 15,
    zIndex: 100,
  },
  roleSelectorLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: COLORS.text.primary,
  },
  roleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roleButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  roleButtonSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  roleButtonText: {
    color: COLORS.text.secondary,
    fontSize: 14,
    fontWeight: '500',
  },
  roleButtonTextSelected: {
    color: COLORS.white,
  },
  roleDropdown: {
    backgroundColor: COLORS.grayBg,
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roleDropdownText: {
    fontSize: 16,
    color: COLORS.text.primary,
  },
  dropdownIcon: {
    fontSize: 14,
    color: COLORS.text.secondary,
  },
  dropdownMenu: {
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 5,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  dropdownItemSelected: {
    backgroundColor: COLORS.primaryLight,
  },
  dropdownItemText: {
    fontSize: 16,
    color: COLORS.text.primary,
  },
  dropdownItemTextSelected: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  // PC风格下拉菜单样式
  pcDropdown: {
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  pcDropdownOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  pcDropdownText: {
    fontSize: 16,
    color: COLORS.text.primary,
  },
  pcDropdownIcon: {
    fontSize: 14,
    color: COLORS.primary,
  },
  pcDropdownItem: {
    padding: 14,
    backgroundColor: COLORS.white,
  },
  pcDropdownItemText: {
    fontSize: 16,
    color: COLORS.text.primary,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  loginButtonDisabled: {
    backgroundColor: COLORS.primaryLight,
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: COLORS.text.secondary,
  },
  registerLink: {
    color: COLORS.primary,
    marginLeft: 5,
  },
  // 模态框样式
  modalContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: COLORS.text.primary,
  },
  modalOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  modalOptionText: {
    fontSize: 16,
    color: COLORS.text.primary,
  },
  dropdownContainer: {
    position: 'relative',
    zIndex: 5000,
    width: '100%',
  },
  dropdown: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderTopWidth: 0,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: COLORS.white,
    position: 'absolute',
    marginTop: 0,
  },
});

export default styles;
