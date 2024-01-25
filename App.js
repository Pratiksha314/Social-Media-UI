import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StackNavigation } from './components/StackNavigation';

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {

  return (
    <SafeAreaView style={appStyles.container}>
      <StatusBar backgroundColor='black' barStyle="light-content" />
      <StackNavigation />
    </SafeAreaView>
  );
}

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36
  },
});
