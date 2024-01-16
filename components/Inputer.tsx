import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const Inputer = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
      value={text}
        style={styles.input}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      marginBottom: 32,
    },
    input: {
      fontSize: 24,
    },
})

export default Inputer;