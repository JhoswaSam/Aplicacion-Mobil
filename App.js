import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CenteredInputButton from './components/InputLabel';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <CenteredInputButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
