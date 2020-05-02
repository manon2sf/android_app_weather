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
      temperature: '10',
      temp_min: '0',
      temp_max: '50',
      wind_speed: '0',
      wind_direction: '0',
      humidity: '50',
      weather_icon: 'icon',
    };
  }

  componentDidMount() {
    const options = {method: 'GET'};

    /* today request */
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=Cannes,fr&appid=42cd7c2cc97723aa080b0a8b115f6d0d&units=metric&lang=fr',
      options,
    )
      .then(response => response.json())
      .then(
        data => {
          this.setState({temperature: data.main.temp});
          this.setState({temp_min: data.main.temp_min});
          this.setState({temp_max: data.main.temp_max});
          this.setState({humidity: data.main.humidity});
          this.setState({wind_speed: data.wind.speed});
          this.setState({wind_speed: data.wind.deg});
        },
        error => {
          console.log('error');
        },
      );

    /* forecast request */
    fetch(
      'http://api.openweathermap.org/data/2.5/forecast?q=Cannes,fr&appid=42cd7c2cc97723aa080b0a8b115f6d0d&units=metric&lang=fr',
      options,
    )
      .then(response => response.json())
      .then(
        data => {
          console.log('ok');
        },
        error => {
          console.log('error');
        },
      );
    
  }

  


  render() {
    return ( 
      <ImageBackground
          style={styles.bgImg}
          source={require('./img/MatinA.jpg')}>
        <ScrollView>

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

            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
            <Text style={[styles.fs60,styles.beige]}> blebleble</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default App;
