import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CoreComponents from './components/CoreComponent';

export default function App() {
  return (
    <ScrollView>
      <CoreComponents/>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ff4a3d'
  },
  image: {
        width: 200,
        height: 200, 
        marginTop: 100
    }
});

//npx create-expo-app hello-world
//npm install -D @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript
//npx expo install react-native-web@~0.18.9 react-dom@18.1.0 @expo/webpack-config@^0.17.2
//set NODE_OPTIONS=--openssl-legacy-provider
//npx expo start
