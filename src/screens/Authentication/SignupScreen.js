import React from 'react';
import { Text, View,  StyleSheet, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native'; // Version can be specified in package.json


// Form
const Form = t.form.Form;

// Form model
const User = t.struct({
  'First name': t.String,
  'Last name': t.String,
   email: t.String,
   'Password': t.String,
});
const options = {
  auto: 'placeholders',
  fields: {
    Password: {
      password: true,
      secureTextEntry: true
    }
  }
};
export default class SignupScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign up',
  };
  
  state = {
    inputValue: 'You can change me!',
    
  };
  handleSubmit = () => {
    console.log(this.props);
    console.log(this.loginform);
  }
  handleSignup = () => {
    
  }

 
  render() {
    return (
      <View style={styles.container}>
        <Form ref={c => (this.loginform = c)} type={User} options={options}/>
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
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
  }
});
