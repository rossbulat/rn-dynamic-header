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
  paragraph: {
    marginVertical: 10,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 21,
  }
})

export default styles;