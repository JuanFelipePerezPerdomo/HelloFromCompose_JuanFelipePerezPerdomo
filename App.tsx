import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {

  const [name, setName] =("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.title}>Saludador Expo</Text>
      
      <View style={styles.row}>
        <Pressable
        onPress={() => alert('¡Botón presionado!')}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#D2E6FF' : '#005DE9' }
        ]}>
          <Text style={styles.buttonText}>Presioname</Text>
        </Pressable>
        <TextInput
          style={styles.input}
          placeholder='Escriba su nombre Aqui'
        />
      </View>
    </View>
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
    fontSize: 20,
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
});
