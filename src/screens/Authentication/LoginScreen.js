import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import t from 'tcomb-form-native'; // Version can be specified in package.json
// Form
const Form = t.form.Form;

// Form model
const User = t.struct({
  email: t.String,
  password: t.String,
});
const _routers = {
  ResetPassword: 'ResetPassword',
  Signup: 'Signup',
  MainPage: 'MainPage',
};
const options = {
  auto: 'placeholders',
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
};

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  state = {
    inputValue: 'You can change me!',
  };

  handleSubmit = () => {

  };

  _handlePress = (_router) => {
    this.props.navigation.navigate(_router);
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Form ref={c => (this.loginform = c)} type={User} options={options}/>
          <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableHighlight>
          
          <Text style={styles.titleLink} onPress={this._handlePress.bind(this,_routers.ResetPassword)}>Reset password</Text>
          <Text style={styles.titleLink} onPress={this._handlePress.bind(this,_routers.MainPage)}>Skip</Text>
          
        </View>
        <View style={styles.containerBottom}>
          <Text style={styles.colorOrange}>Don't have an account? 
          <Text style={styles.titleLink} onPress={this._handlePress.bind(this,_routers.Signup)}> Register here!</Text></Text>
        </View>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    marginTop: 0,
    padding: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  containerTop: {
    flex: 1,
      borderWidth: 1,
    borderColor: 'transparent',
    borderStyle: 'solid',
  },
  containerBottom: {
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  colorOrange: {
    color: '#ff5a00',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  titleLink: {
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    textAlign: 'right',
  },
 
});
