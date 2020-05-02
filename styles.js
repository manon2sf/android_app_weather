import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerG: {
    marginTop: 50,
    //flex: 1,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  header: {
    //flex: 1,
  },
  middle: {
    //flex: 2,
  },
  footer: {
    //flex: 1,
    //justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  fs30: {
    fontSize: 30,
  },
  fs60: {
    fontSize: 60,
  },
  fs40: {
    fontSize: 40,
  },
  bold: {
    fontWeight: 'bold',
  },
  beige: {
    color: 'beige',
  },
  flex: {
    flexDirection: 'row',
  },
  center: {
    textAlign: 'center',
  },
  bgImg: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  button: {
    borderRadius: 2,
  },
  img: {
    width: 110,
    height: 90,
  },
  temp: {
    width: 50,
    height: 100,
    marginHorizontal: 20,
  },
});

export default styles;
