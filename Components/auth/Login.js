import React, {Component} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="email" />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('app')}>
          <Text>Connexion</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
