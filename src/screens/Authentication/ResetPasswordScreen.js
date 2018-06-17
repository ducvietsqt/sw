import React from 'react';
import { Text, View,  StyleSheet, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native'; // Version can be specified in package.json
// Form
const Form = t.form.Form;

// Form model
const User = t.struct({
  email: t.String,
});
const _routes = {
  SetPassword: 'SetPassword'
};
export default class ResetPasswordScreen extends React.Component {
  static navigationOptions = {
    title: 'Reset Password',
  };
  
  state = {
    inputValue: 'You can change me!',
  };
  handleSubmit = () => {
    this.props.navigation.navigate(_routes.SetPassword);
  }

 
  render() {
    return (
      <View style={styles.container}>
        <Form ref={c => (this.loginform = c)} type={User} />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
var styles = StyleSheet.create({
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
