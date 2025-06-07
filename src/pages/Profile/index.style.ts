import { StyleSheet } from 'react-native';

import { COLORS } from '~/constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: 20,
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.8,
  },
  section: {
    backgroundColor: COLORS.white,
    marginTop: 10,
    padding: 15,
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  orderOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderOption: {
    alignItems: 'center',
    width: '25%',
  },
  orderOptionText: {
    marginTop: 5,
    fontSize: 14,
  },
  serviceOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceOption: {
    alignItems: 'center',
    width: '25%',
    marginBottom: 20,
  },
  serviceOptionText: {
    marginTop: 5,
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: COLORS.white,
    marginTop: 20,
    marginBottom: 30,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: COLORS.text.danger,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
