import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

import auth from '../../auth/Login';

class Splashscreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('auth');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Votre météo arrive !</Text>
        <Image
          style={styles.icon}
          source={require('../../../img/weather_sun_sunny_sunshine_icon_124153.png')}
        />
        <View style={{alignItems: 'center'}}>
          <Text style={styles.citation}>
            "Qui laboure au soleil mangera à l'ombre"
          </Text>
          <Text style={styles.citation}>Proverbe Africain</Text>
        </View>
      </View>
    );
  }
}

export default Splashscreen;
