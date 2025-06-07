import { StyleSheet } from 'react-native';

import { COLORS } from '~/constants/colors.ts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  welcomeText: {
    fontSize: 14,
    color: COLORS.white,
    marginTop: 5,
  },
  contentContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.white,
    width: '30%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10,
  },
  buttonText: {
    color: COLORS.text.primary,
    fontWeight: '500',
  },
  cardContainer: {
    marginTop: 10,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: COLORS.text.secondary,
  },
  cardTags: {
    fontSize: 12,
    color: COLORS.text.danger,
    marginTop: 5,
  },
});

export default styles;
