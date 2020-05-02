/*  Imports */
import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Button,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '11',
    };
  }

  /*componentDidMount() {
    const options = {method: 'GET'};
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=Cannes,fr&appid=42cd7c2cc97723aa080b0a8b115f6d0d&units=metric',
      options,
    )
      .then(response => response.json())
      .then(
        data => {
          console.log('ça marche presque');
          this.setState({temperature: data.main.temp});
          console.log(this.state.temperature);
        },
        error => {
          console.log('error');
        },
      );
  }*/

  render() {
    return (
      <ScrollView>
        <ImageBackground
          style={styles.bgImg}
          source={require('./img/MatinA.jpg')}>
          <View style={styles.containerG}>
            <View style={[styles.container, styles.header]}>
              <Text style={[styles.beige, styles.center, styles.fs30]}>
                Météo du jour à
              </Text>
              <Text
                style={[styles.beige, styles.bold, styles.center, styles.fs40]}>
                GRASSE
              </Text>
            </View>
            <View style={[styles.container, styles.middle, styles.flex]}>
              <Image
                style={styles.temp}
                source={require('./img/weather_thermometer_cold_temperature_icon_124165.png')}
              />
              <Text
                style={[styles.beige, styles.bold, styles.center, styles.fs60]}>
                {this.state.temperature} °C
              </Text>
            </View>
            <View style={[styles.container, styles.middle]}>
              <Image
                style={styles.img}
                source={require('./img/weather_rainbow_cloud_icon_124156.png')}
              />
            </View>

            <View style={styles.container}>
              <Text> blebleble</Text>
              <Text> blebleble</Text>
              <Text> blebleble</Text>
              <Text> blebleble</Text>
              <Text> blebleble</Text>
              <Text> blebleble</Text>
              <Text> blebleble</Text>
              <Text> blebleble</Text>
              <Text> blebleble</Text>
              <Text> blebleble</Text>
              <Text> blebleble</Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

export default App;
