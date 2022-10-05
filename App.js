import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [keyword, setKeyword] = useState('');
  const speak = () => {
    const thingToSay = keyword;
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
            <TextInput
      style={{fontSize: 18}}
        placeholder=' TEXT'
        onChangeText={text => setKeyword(text)}
      />
      <Button title="Press to hear text" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40, 
    alignItems: 'center',
    justifyContent: 'center',
  }
});

