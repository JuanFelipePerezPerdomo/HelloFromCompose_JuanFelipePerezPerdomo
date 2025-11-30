import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {

  const [name, setName] = useState("");
  const charLimit = 20;
  const [message, setMessage] = ("Hola ${name}");

  const handleTextChange = (inputText) => {
    setName(inputText);
  }

  const textInputStyle = [
    styles.input,
    {
      borderColor: name.length > charLimit ? '#f00' : 'gray'
    }
  ];

  useEffect

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.title}>Saludador Expo</Text>
      <View style={styles.row}>
        <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#D2E6FF' : '#005DE9' },
          name.trim().length === 0 && styles.buttonDisabled
        ]}
        disabled={name.trim().length === 0 }
        onPress={() => alert('¡Botón presionado!')}>
          <Text style={styles.buttonText}>Saludar</Text>
        </Pressable>
        <TextInput
          maxLength={charLimit}
          style={textInputStyle}
          value={name}
          onChangeText={handleTextChange}
          placeholder='Introduce Tu Nombre'
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
  },
  title: {
    color: '#000',
    fontSize: 25,
    justifyContent:'flex-start',
  },
  input:{
    width: 200,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  button:{
    backgroundColor: '#ffff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
  },
  message:{
    color: 'black',
    fontSize: 20
  },
  buttonDisabled:{
    backgroundColor: '#D2E6FF'
  },
  error:{
    borderColor: '#f00',
    color: '#f00'
  }
});
