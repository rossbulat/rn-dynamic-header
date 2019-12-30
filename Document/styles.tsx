import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    marginBottom: 50,
  },
  title: {
    paddingTop: 0,
    marginBottom: 12,
    textAlign: 'left',
    width: '100%',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'blue',
  },
  headerText: {
    textAlign: 'center',
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 17,
  },
  paragraph: {
    marginVertical: 10,
  }
})

export default styles;