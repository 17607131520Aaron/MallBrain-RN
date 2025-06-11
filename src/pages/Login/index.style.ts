import { StyleSheet } from 'react-native';

import { COLORS } from '~/constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  gradientBackground: {
    flex: 1,
    backgroundColor: '#ff6700',
  },
  formContainer: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 60,
    fontWeight: 'bold',
    color: COLORS.white,
    width: 80,
    height: 80,
    textAlign: 'center',
    lineHeight: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 40,
    overflow: 'hidden',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.white,
    marginTop: 5,
    opacity: 0.9,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999',
    paddingBottom: 8,
  },
  activeTabText: {
    color: '#ff6700',
    fontWeight: 'bold',
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputStyle: {
    marginBottom: 15,
    height: 50,
    borderWidth: 0,
    borderColor: '#e0e0e0',
    borderRadius: 4,
  },
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  checkboxChecked: {
    backgroundColor: '#ff6700',
    borderColor: '#ff6700',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#666',
  },
  policyContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  policyText: {
    fontSize: 12,
    color: '#666',
    flexShrink: 1,
  },
  policyLink: {
    color: '#ff6700',
  },
  loginButton: {
    backgroundColor: '#ff6700',
    borderRadius: 4,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#ff6700',
    fontSize: 14,
  },
  smsLoginText: {
    color: '#ff6700',
    fontSize: 14,
  },
  qrcodeContainer: {
    alignItems: 'center',
    padding: 20,
    paddingVertical: 40,
  },
  qrcodeText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#333',
    fontWeight: '500',
  },
  qrcodeSubText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
  registerText: {
    color: '#ff6700',
    marginLeft: 4,
    fontSize: 14,
  },
  otherLoginOptions: {
    marginTop: 10,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  dividerText: {
    color: '#999',
    paddingHorizontal: 15,
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default styles;
