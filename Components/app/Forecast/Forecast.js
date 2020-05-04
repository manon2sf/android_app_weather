import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

class Forecast extends Component {
  static navigationOptions = {
    drawerLabel: 'Forecast',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../../../img/weather_rainy_rain_umbrella_icon_124164.png')}
        style={styles.icon}
      />
    ),
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Text>Menu</Text>
        </TouchableOpacity>
        <Text>test</Text>
      </View>
    );
  }
}

export default Forecast;
