import React from 'react';
import { Text, View } from 'react-native';

export default class PhotoScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Photo!</Text>
      </View>
    );
  }
}
