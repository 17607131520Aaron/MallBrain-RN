import { StyleSheet } from 'react-native';

import { COLORS } from '~/constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.black,
  },
  safeArea: {
    flex: 1,
    width: '100%',
  },
  gradientBackground: {
    flex: 1,
    backgroundColor: COLORS.orange,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: {
    padding: 5,
  },
  helpButton: {
    padding: 5,
  },
  helpText: {
    color: COLORS.white,
    fontSize: 16,
  },
  formContainer: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 40,
  },
  logoBox: {
    width: 80,
    height: 80,
    backgroundColor: '#FF6900',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: COLORS.white,
    textTransform: 'lowercase',
  },
  title: {
    fontSize: 22,
    color: COLORS.white,
    marginTop: 5,
  },
  logo: {
    fontSize: 60,
    fontWeight: 'bold',
    color: COLORS.white,
    width: 80,
    height: 80,
    textAlign: 'center',
    lineHeight: 80,
    backgroundColor: COLORS.whiteTransparent,
    borderRadius: 40,
    overflow: 'hidden',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.white,
    marginTop: 5,
    opacity: 0.9,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
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
  inputGroup: {
    marginBottom: 15,
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
    borderColor: COLORS.grayD8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  checkboxChecked: {
    backgroundColor: COLORS.orange,
    borderColor: COLORS.orange,
  },
  checkboxLabel: {
    fontSize: 14,
    color: COLORS.text.secondary,
  },
  policyContainer: {
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
  },
  policyText: {
    fontSize: 12,
    color: '#888',
    flexShrink: 1,
  },
  policyLink: {
    color: '#888',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#2196F3',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
    width: '100%',
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: COLORS.orange,
    fontSize: 14,
  },
  bottomLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  bottomLinkText: {
    color: '#888',
    fontSize: 14,
    paddingHorizontal: 10,
  },
  separator: {
    color: '#888',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    color: COLORS.text.secondary,
    fontSize: 14,
  },
  registerText: {
    color: COLORS.orange,
    marginLeft: 4,
    fontSize: 14,
  },
  otherLoginSection: {
    width: '100%',
    marginTop: 20,
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
    backgroundColor: '#333',
  },
  dividerText: {
    color: '#888',
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
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  roleSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  roleButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.bottomBorder,
  },
  roleButtonActive: {
    backgroundColor: COLORS.orange,
    borderColor: COLORS.orange,
  },
  roleButtonText: {
    fontSize: 14,
    color: COLORS.text.secondary,
  },
  roleButtonTextActive: {
    color: COLORS.white,
  },
});

export default styles;
